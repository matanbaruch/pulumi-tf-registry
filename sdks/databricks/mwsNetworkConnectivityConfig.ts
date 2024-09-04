// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MwsNetworkConnectivityConfig extends pulumi.CustomResource {
    /**
     * Get an existing MwsNetworkConnectivityConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MwsNetworkConnectivityConfigState, opts?: pulumi.CustomResourceOptions): MwsNetworkConnectivityConfig {
        return new MwsNetworkConnectivityConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'databricks:index/mwsNetworkConnectivityConfig:MwsNetworkConnectivityConfig';

    /**
     * Returns true if the given object is an instance of MwsNetworkConnectivityConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MwsNetworkConnectivityConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MwsNetworkConnectivityConfig.__pulumiType;
    }

    public readonly accountId!: pulumi.Output<string>;
    public readonly creationTime!: pulumi.Output<number>;
    public readonly egressConfig!: pulumi.Output<outputs.MwsNetworkConnectivityConfigEgressConfig | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkConnectivityConfigId!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly updatedTime!: pulumi.Output<number>;

    /**
     * Create a MwsNetworkConnectivityConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MwsNetworkConnectivityConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MwsNetworkConnectivityConfigArgs | MwsNetworkConnectivityConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MwsNetworkConnectivityConfigState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["creationTime"] = state ? state.creationTime : undefined;
            resourceInputs["egressConfig"] = state ? state.egressConfig : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkConnectivityConfigId"] = state ? state.networkConnectivityConfigId : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["updatedTime"] = state ? state.updatedTime : undefined;
        } else {
            const args = argsOrState as MwsNetworkConnectivityConfigArgs | undefined;
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["creationTime"] = args ? args.creationTime : undefined;
            resourceInputs["egressConfig"] = args ? args.egressConfig : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkConnectivityConfigId"] = args ? args.networkConnectivityConfigId : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["updatedTime"] = args ? args.updatedTime : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MwsNetworkConnectivityConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MwsNetworkConnectivityConfig resources.
 */
export interface MwsNetworkConnectivityConfigState {
    accountId?: pulumi.Input<string>;
    creationTime?: pulumi.Input<number>;
    egressConfig?: pulumi.Input<inputs.MwsNetworkConnectivityConfigEgressConfig>;
    name?: pulumi.Input<string>;
    networkConnectivityConfigId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    updatedTime?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a MwsNetworkConnectivityConfig resource.
 */
export interface MwsNetworkConnectivityConfigArgs {
    accountId?: pulumi.Input<string>;
    creationTime?: pulumi.Input<number>;
    egressConfig?: pulumi.Input<inputs.MwsNetworkConnectivityConfigEgressConfig>;
    name?: pulumi.Input<string>;
    networkConnectivityConfigId?: pulumi.Input<string>;
    region: pulumi.Input<string>;
    updatedTime?: pulumi.Input<number>;
}
