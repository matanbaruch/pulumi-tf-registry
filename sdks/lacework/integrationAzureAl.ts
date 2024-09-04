// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IntegrationAzureAl extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAzureAl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationAzureAlState, opts?: pulumi.CustomResourceOptions): IntegrationAzureAl {
        return new IntegrationAzureAl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lacework:index/integrationAzureAl:IntegrationAzureAl';

    /**
     * Returns true if the given object is an instance of IntegrationAzureAl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationAzureAl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationAzureAl.__pulumiType;
    }

    public /*out*/ readonly createdOrUpdatedBy!: pulumi.Output<string>;
    public /*out*/ readonly createdOrUpdatedTime!: pulumi.Output<string>;
    public readonly credentials!: pulumi.Output<outputs.IntegrationAzureAlCredentials>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly intgGuid!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly orgLevel!: pulumi.Output<boolean>;
    public readonly queueUrl!: pulumi.Output<string>;
    /**
     * The number of attempts to create the external integration.
     */
    public readonly retries!: pulumi.Output<number | undefined>;
    public readonly tenantId!: pulumi.Output<string>;
    public /*out*/ readonly typeName!: pulumi.Output<string>;

    /**
     * Create a IntegrationAzureAl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAzureAlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IntegrationAzureAlArgs | IntegrationAzureAlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IntegrationAzureAlState | undefined;
            resourceInputs["createdOrUpdatedBy"] = state ? state.createdOrUpdatedBy : undefined;
            resourceInputs["createdOrUpdatedTime"] = state ? state.createdOrUpdatedTime : undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["intgGuid"] = state ? state.intgGuid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["orgLevel"] = state ? state.orgLevel : undefined;
            resourceInputs["queueUrl"] = state ? state.queueUrl : undefined;
            resourceInputs["retries"] = state ? state.retries : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["typeName"] = state ? state.typeName : undefined;
        } else {
            const args = argsOrState as IntegrationAzureAlArgs | undefined;
            if ((!args || args.credentials === undefined) && !opts.urn) {
                throw new Error("Missing required property 'credentials'");
            }
            if ((!args || args.queueUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queueUrl'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["queueUrl"] = args ? args.queueUrl : undefined;
            resourceInputs["retries"] = args ? args.retries : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["createdOrUpdatedBy"] = undefined /*out*/;
            resourceInputs["createdOrUpdatedTime"] = undefined /*out*/;
            resourceInputs["intgGuid"] = undefined /*out*/;
            resourceInputs["orgLevel"] = undefined /*out*/;
            resourceInputs["typeName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IntegrationAzureAl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IntegrationAzureAl resources.
 */
export interface IntegrationAzureAlState {
    createdOrUpdatedBy?: pulumi.Input<string>;
    createdOrUpdatedTime?: pulumi.Input<string>;
    credentials?: pulumi.Input<inputs.IntegrationAzureAlCredentials>;
    enabled?: pulumi.Input<boolean>;
    intgGuid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orgLevel?: pulumi.Input<boolean>;
    queueUrl?: pulumi.Input<string>;
    /**
     * The number of attempts to create the external integration.
     */
    retries?: pulumi.Input<number>;
    tenantId?: pulumi.Input<string>;
    typeName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IntegrationAzureAl resource.
 */
export interface IntegrationAzureAlArgs {
    credentials: pulumi.Input<inputs.IntegrationAzureAlCredentials>;
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    queueUrl: pulumi.Input<string>;
    /**
     * The number of attempts to create the external integration.
     */
    retries?: pulumi.Input<number>;
    tenantId: pulumi.Input<string>;
}
