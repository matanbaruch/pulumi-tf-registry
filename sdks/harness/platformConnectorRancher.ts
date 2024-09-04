// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PlatformConnectorRancher extends pulumi.CustomResource {
    /**
     * Get an existing PlatformConnectorRancher resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PlatformConnectorRancherState, opts?: pulumi.CustomResourceOptions): PlatformConnectorRancher {
        return new PlatformConnectorRancher(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'harness:index/platformConnectorRancher:PlatformConnectorRancher';

    /**
     * Returns true if the given object is an instance of PlatformConnectorRancher.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PlatformConnectorRancher {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PlatformConnectorRancher.__pulumiType;
    }

    /**
     * Bearer token information for the rancher cluster.
     */
    public readonly bearerToken!: pulumi.Output<outputs.PlatformConnectorRancherBearerToken | undefined>;
    /**
     * Selectors to use for the delegate.
     */
    public readonly delegateSelectors!: pulumi.Output<string[] | undefined>;
    /**
     * Description of the resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Enable this flag for force deletion of connector
     */
    public readonly forceDelete!: pulumi.Output<boolean>;
    /**
     * Unique identifier of the resource.
     */
    public readonly identifier!: pulumi.Output<string>;
    /**
     * Name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Unique identifier of the organization.
     */
    public readonly orgId!: pulumi.Output<string | undefined>;
    /**
     * Unique identifier of the project.
     */
    public readonly projectId!: pulumi.Output<string | undefined>;
    /**
     * The URL of the Rancher cluster.
     */
    public readonly rancherUrl!: pulumi.Output<string>;
    /**
     * Tags to associate with the resource.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a PlatformConnectorRancher resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PlatformConnectorRancherArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PlatformConnectorRancherArgs | PlatformConnectorRancherState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PlatformConnectorRancherState | undefined;
            resourceInputs["bearerToken"] = state ? state.bearerToken : undefined;
            resourceInputs["delegateSelectors"] = state ? state.delegateSelectors : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["forceDelete"] = state ? state.forceDelete : undefined;
            resourceInputs["identifier"] = state ? state.identifier : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["rancherUrl"] = state ? state.rancherUrl : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as PlatformConnectorRancherArgs | undefined;
            if ((!args || args.identifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identifier'");
            }
            if ((!args || args.rancherUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rancherUrl'");
            }
            resourceInputs["bearerToken"] = args ? args.bearerToken : undefined;
            resourceInputs["delegateSelectors"] = args ? args.delegateSelectors : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["forceDelete"] = args ? args.forceDelete : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["rancherUrl"] = args ? args.rancherUrl : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PlatformConnectorRancher.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PlatformConnectorRancher resources.
 */
export interface PlatformConnectorRancherState {
    /**
     * Bearer token information for the rancher cluster.
     */
    bearerToken?: pulumi.Input<inputs.PlatformConnectorRancherBearerToken>;
    /**
     * Selectors to use for the delegate.
     */
    delegateSelectors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Enable this flag for force deletion of connector
     */
    forceDelete?: pulumi.Input<boolean>;
    /**
     * Unique identifier of the resource.
     */
    identifier?: pulumi.Input<string>;
    /**
     * Name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Unique identifier of the organization.
     */
    orgId?: pulumi.Input<string>;
    /**
     * Unique identifier of the project.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The URL of the Rancher cluster.
     */
    rancherUrl?: pulumi.Input<string>;
    /**
     * Tags to associate with the resource.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a PlatformConnectorRancher resource.
 */
export interface PlatformConnectorRancherArgs {
    /**
     * Bearer token information for the rancher cluster.
     */
    bearerToken?: pulumi.Input<inputs.PlatformConnectorRancherBearerToken>;
    /**
     * Selectors to use for the delegate.
     */
    delegateSelectors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Enable this flag for force deletion of connector
     */
    forceDelete?: pulumi.Input<boolean>;
    /**
     * Unique identifier of the resource.
     */
    identifier: pulumi.Input<string>;
    /**
     * Name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Unique identifier of the organization.
     */
    orgId?: pulumi.Input<string>;
    /**
     * Unique identifier of the project.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The URL of the Rancher cluster.
     */
    rancherUrl: pulumi.Input<string>;
    /**
     * Tags to associate with the resource.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
