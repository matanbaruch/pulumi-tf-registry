// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WebdeploymentsDeployment extends pulumi.CustomResource {
    /**
     * Get an existing WebdeploymentsDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebdeploymentsDeploymentState, opts?: pulumi.CustomResourceOptions): WebdeploymentsDeployment {
        return new WebdeploymentsDeployment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'genesyscloud:index/webdeploymentsDeployment:WebdeploymentsDeployment';

    /**
     * Returns true if the given object is an instance of WebdeploymentsDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebdeploymentsDeployment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebdeploymentsDeployment.__pulumiType;
    }

    /**
     * Whether all domains are allowed or not. allowedDomains must be empty when this is true. Defaults to `false`.
     */
    public readonly allowAllDomains!: pulumi.Output<boolean | undefined>;
    /**
     * The list of domains that are approved to use this deployment; the list will be added to CORS headers for ease of web
     * use.
     */
    public readonly allowedDomains!: pulumi.Output<string[] | undefined>;
    /**
     * The published configuration version used by this deployment
     */
    public readonly configuration!: pulumi.Output<outputs.WebdeploymentsDeploymentConfiguration>;
    /**
     * Deployment description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A reference to the inboundshortmessage flow used by this deployment.
     */
    public readonly flowId!: pulumi.Output<string | undefined>;
    /**
     * Deployment name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The current status of the deployment. Valid values: Pending, Active, Inactive, Error, Deleting.
     */
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a WebdeploymentsDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebdeploymentsDeploymentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebdeploymentsDeploymentArgs | WebdeploymentsDeploymentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebdeploymentsDeploymentState | undefined;
            resourceInputs["allowAllDomains"] = state ? state.allowAllDomains : undefined;
            resourceInputs["allowedDomains"] = state ? state.allowedDomains : undefined;
            resourceInputs["configuration"] = state ? state.configuration : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["flowId"] = state ? state.flowId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as WebdeploymentsDeploymentArgs | undefined;
            if ((!args || args.configuration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configuration'");
            }
            resourceInputs["allowAllDomains"] = args ? args.allowAllDomains : undefined;
            resourceInputs["allowedDomains"] = args ? args.allowedDomains : undefined;
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["flowId"] = args ? args.flowId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WebdeploymentsDeployment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WebdeploymentsDeployment resources.
 */
export interface WebdeploymentsDeploymentState {
    /**
     * Whether all domains are allowed or not. allowedDomains must be empty when this is true. Defaults to `false`.
     */
    allowAllDomains?: pulumi.Input<boolean>;
    /**
     * The list of domains that are approved to use this deployment; the list will be added to CORS headers for ease of web
     * use.
     */
    allowedDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The published configuration version used by this deployment
     */
    configuration?: pulumi.Input<inputs.WebdeploymentsDeploymentConfiguration>;
    /**
     * Deployment description
     */
    description?: pulumi.Input<string>;
    /**
     * A reference to the inboundshortmessage flow used by this deployment.
     */
    flowId?: pulumi.Input<string>;
    /**
     * Deployment name
     */
    name?: pulumi.Input<string>;
    /**
     * The current status of the deployment. Valid values: Pending, Active, Inactive, Error, Deleting.
     */
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WebdeploymentsDeployment resource.
 */
export interface WebdeploymentsDeploymentArgs {
    /**
     * Whether all domains are allowed or not. allowedDomains must be empty when this is true. Defaults to `false`.
     */
    allowAllDomains?: pulumi.Input<boolean>;
    /**
     * The list of domains that are approved to use this deployment; the list will be added to CORS headers for ease of web
     * use.
     */
    allowedDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The published configuration version used by this deployment
     */
    configuration: pulumi.Input<inputs.WebdeploymentsDeploymentConfiguration>;
    /**
     * Deployment description
     */
    description?: pulumi.Input<string>;
    /**
     * A reference to the inboundshortmessage flow used by this deployment.
     */
    flowId?: pulumi.Input<string>;
    /**
     * Deployment name
     */
    name?: pulumi.Input<string>;
    /**
     * The current status of the deployment. Valid values: Pending, Active, Inactive, Error, Deleting.
     */
    status?: pulumi.Input<string>;
}
