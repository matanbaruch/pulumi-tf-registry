// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Item extends pulumi.CustomResource {
    /**
     * Get an existing Item resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ItemState, opts?: pulumi.CustomResourceOptions): Item {
        return new Item(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kentik-cloudexport:index/item:Item';

    /**
     * Returns true if the given object is an instance of Item.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Item {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Item.__pulumiType;
    }

    /**
     * Hostname of the Kentik deployment where the API calls related to this export should go, eg. api.kentik.com
     */
    public readonly apiRoot!: pulumi.Output<string>;
    /**
     * Properties specific to Amazon Web Services "vpc flow logs" exports
     */
    public readonly aws!: pulumi.Output<outputs.ItemAw[] | undefined>;
    /**
     * Properties specific to Azure exports
     */
    public readonly azures!: pulumi.Output<outputs.ItemAzure[] | undefined>;
    /**
     * Optional BGP related settings
     */
    public readonly bgps!: pulumi.Output<outputs.ItemBgp[] | undefined>;
    /**
     * The cloud provider targeted by this export (aws, azure, gce, ibm)
     */
    public readonly cloudProvider!: pulumi.Output<string>;
    /**
     * Export task status
     */
    public /*out*/ readonly currentStatuses!: pulumi.Output<outputs.ItemCurrentStatus[]>;
    /**
     * An optional, longer description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Whether this task is enabled and intended to run, or disabled
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Hostname of the Kentik deployment where the data generated by this export should go, eg. flow.kentik.com
     */
    public readonly flowDest!: pulumi.Output<string>;
    /**
     * Properties specific to Google Cloud export
     */
    public readonly gces!: pulumi.Output<outputs.ItemGce[] | undefined>;
    /**
     * Properties specific to IBM Cloud exports
     */
    public readonly ibms!: pulumi.Output<outputs.ItemIbm[] | undefined>;
    /**
     * A short name for this export
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The identifier of the Kentik plan associated with this task
     */
    public readonly planId!: pulumi.Output<string>;
    /**
     * CLOUD_EXPORT_TYPE_UNSPECIFIED: Invalid or incomplete exports. CLOUD_EXPORT_TYPE_KENTIK_MANAGED: Cloud exports that are
     * managed by Kentik. CLOUD_EXPORT_TYPE_CUSTOMER_MANAGED: Exports that are managed by Kentik customers (eg. by running an
     * agent)
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Item resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ItemArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ItemArgs | ItemState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ItemState | undefined;
            resourceInputs["apiRoot"] = state ? state.apiRoot : undefined;
            resourceInputs["aws"] = state ? state.aws : undefined;
            resourceInputs["azures"] = state ? state.azures : undefined;
            resourceInputs["bgps"] = state ? state.bgps : undefined;
            resourceInputs["cloudProvider"] = state ? state.cloudProvider : undefined;
            resourceInputs["currentStatuses"] = state ? state.currentStatuses : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["flowDest"] = state ? state.flowDest : undefined;
            resourceInputs["gces"] = state ? state.gces : undefined;
            resourceInputs["ibms"] = state ? state.ibms : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["planId"] = state ? state.planId : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ItemArgs | undefined;
            if ((!args || args.cloudProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudProvider'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.planId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'planId'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["apiRoot"] = args ? args.apiRoot : undefined;
            resourceInputs["aws"] = args ? args.aws : undefined;
            resourceInputs["azures"] = args ? args.azures : undefined;
            resourceInputs["bgps"] = args ? args.bgps : undefined;
            resourceInputs["cloudProvider"] = args ? args.cloudProvider : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["flowDest"] = args ? args.flowDest : undefined;
            resourceInputs["gces"] = args ? args.gces : undefined;
            resourceInputs["ibms"] = args ? args.ibms : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["planId"] = args ? args.planId : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["currentStatuses"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Item.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Item resources.
 */
export interface ItemState {
    /**
     * Hostname of the Kentik deployment where the API calls related to this export should go, eg. api.kentik.com
     */
    apiRoot?: pulumi.Input<string>;
    /**
     * Properties specific to Amazon Web Services "vpc flow logs" exports
     */
    aws?: pulumi.Input<pulumi.Input<inputs.ItemAw>[]>;
    /**
     * Properties specific to Azure exports
     */
    azures?: pulumi.Input<pulumi.Input<inputs.ItemAzure>[]>;
    /**
     * Optional BGP related settings
     */
    bgps?: pulumi.Input<pulumi.Input<inputs.ItemBgp>[]>;
    /**
     * The cloud provider targeted by this export (aws, azure, gce, ibm)
     */
    cloudProvider?: pulumi.Input<string>;
    /**
     * Export task status
     */
    currentStatuses?: pulumi.Input<pulumi.Input<inputs.ItemCurrentStatus>[]>;
    /**
     * An optional, longer description
     */
    description?: pulumi.Input<string>;
    /**
     * Whether this task is enabled and intended to run, or disabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Hostname of the Kentik deployment where the data generated by this export should go, eg. flow.kentik.com
     */
    flowDest?: pulumi.Input<string>;
    /**
     * Properties specific to Google Cloud export
     */
    gces?: pulumi.Input<pulumi.Input<inputs.ItemGce>[]>;
    /**
     * Properties specific to IBM Cloud exports
     */
    ibms?: pulumi.Input<pulumi.Input<inputs.ItemIbm>[]>;
    /**
     * A short name for this export
     */
    name?: pulumi.Input<string>;
    /**
     * The identifier of the Kentik plan associated with this task
     */
    planId?: pulumi.Input<string>;
    /**
     * CLOUD_EXPORT_TYPE_UNSPECIFIED: Invalid or incomplete exports. CLOUD_EXPORT_TYPE_KENTIK_MANAGED: Cloud exports that are
     * managed by Kentik. CLOUD_EXPORT_TYPE_CUSTOMER_MANAGED: Exports that are managed by Kentik customers (eg. by running an
     * agent)
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Item resource.
 */
export interface ItemArgs {
    /**
     * Hostname of the Kentik deployment where the API calls related to this export should go, eg. api.kentik.com
     */
    apiRoot?: pulumi.Input<string>;
    /**
     * Properties specific to Amazon Web Services "vpc flow logs" exports
     */
    aws?: pulumi.Input<pulumi.Input<inputs.ItemAw>[]>;
    /**
     * Properties specific to Azure exports
     */
    azures?: pulumi.Input<pulumi.Input<inputs.ItemAzure>[]>;
    /**
     * Optional BGP related settings
     */
    bgps?: pulumi.Input<pulumi.Input<inputs.ItemBgp>[]>;
    /**
     * The cloud provider targeted by this export (aws, azure, gce, ibm)
     */
    cloudProvider: pulumi.Input<string>;
    /**
     * An optional, longer description
     */
    description?: pulumi.Input<string>;
    /**
     * Whether this task is enabled and intended to run, or disabled
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Hostname of the Kentik deployment where the data generated by this export should go, eg. flow.kentik.com
     */
    flowDest?: pulumi.Input<string>;
    /**
     * Properties specific to Google Cloud export
     */
    gces?: pulumi.Input<pulumi.Input<inputs.ItemGce>[]>;
    /**
     * Properties specific to IBM Cloud exports
     */
    ibms?: pulumi.Input<pulumi.Input<inputs.ItemIbm>[]>;
    /**
     * A short name for this export
     */
    name?: pulumi.Input<string>;
    /**
     * The identifier of the Kentik plan associated with this task
     */
    planId: pulumi.Input<string>;
    /**
     * CLOUD_EXPORT_TYPE_UNSPECIFIED: Invalid or incomplete exports. CLOUD_EXPORT_TYPE_KENTIK_MANAGED: Cloud exports that are
     * managed by Kentik. CLOUD_EXPORT_TYPE_CUSTOMER_MANAGED: Exports that are managed by Kentik customers (eg. by running an
     * agent)
     */
    type: pulumi.Input<string>;
}
