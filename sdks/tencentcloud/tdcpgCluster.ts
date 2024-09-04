// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TdcpgCluster extends pulumi.CustomResource {
    /**
     * Get an existing TdcpgCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TdcpgClusterState, opts?: pulumi.CustomResourceOptions): TdcpgCluster {
        return new TdcpgCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/tdcpgCluster:TdcpgCluster';

    /**
     * Returns true if the given object is an instance of TdcpgCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TdcpgCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TdcpgCluster.__pulumiType;
    }

    /**
     * cluster name.
     */
    public readonly clusterName!: pulumi.Output<string | undefined>;
    /**
     * cpu cores.
     */
    public readonly cpu!: pulumi.Output<number>;
    /**
     * community version number, default to 10.17.
     */
    public readonly dbVersion!: pulumi.Output<string | undefined>;
    /**
     * instance count.
     */
    public readonly instanceCount!: pulumi.Output<number | undefined>;
    /**
     * user password.
     */
    public readonly masterUserPassword!: pulumi.Output<string>;
    /**
     * memory size.
     */
    public readonly memory!: pulumi.Output<number>;
    /**
     * pay mode, the value is either PREPAID or POSTPAID_BY_HOUR.
     */
    public readonly payMode!: pulumi.Output<string>;
    /**
     * purchase time, required when PayMode is PREPAID, the value range is 1~60, default to 1.
     */
    public readonly period!: pulumi.Output<number>;
    /**
     * project id, default to 0, means default project.
     */
    public readonly projectId!: pulumi.Output<number | undefined>;
    /**
     * max storage, the unit is GB.
     */
    public readonly storage!: pulumi.Output<number>;
    /**
     * subnet id.
     */
    public readonly subnetId!: pulumi.Output<string>;
    /**
     * vpc id.
     */
    public readonly vpcId!: pulumi.Output<string>;
    /**
     * available zone.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a TdcpgCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TdcpgClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TdcpgClusterArgs | TdcpgClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TdcpgClusterState | undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["cpu"] = state ? state.cpu : undefined;
            resourceInputs["dbVersion"] = state ? state.dbVersion : undefined;
            resourceInputs["instanceCount"] = state ? state.instanceCount : undefined;
            resourceInputs["masterUserPassword"] = state ? state.masterUserPassword : undefined;
            resourceInputs["memory"] = state ? state.memory : undefined;
            resourceInputs["payMode"] = state ? state.payMode : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["storage"] = state ? state.storage : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as TdcpgClusterArgs | undefined;
            if ((!args || args.cpu === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cpu'");
            }
            if ((!args || args.masterUserPassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'masterUserPassword'");
            }
            if ((!args || args.memory === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memory'");
            }
            if ((!args || args.payMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'payMode'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            if ((!args || args.zone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zone'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["cpu"] = args ? args.cpu : undefined;
            resourceInputs["dbVersion"] = args ? args.dbVersion : undefined;
            resourceInputs["instanceCount"] = args ? args.instanceCount : undefined;
            resourceInputs["masterUserPassword"] = args?.masterUserPassword ? pulumi.secret(args.masterUserPassword) : undefined;
            resourceInputs["memory"] = args ? args.memory : undefined;
            resourceInputs["payMode"] = args ? args.payMode : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["storage"] = args ? args.storage : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["masterUserPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(TdcpgCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TdcpgCluster resources.
 */
export interface TdcpgClusterState {
    /**
     * cluster name.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * cpu cores.
     */
    cpu?: pulumi.Input<number>;
    /**
     * community version number, default to 10.17.
     */
    dbVersion?: pulumi.Input<string>;
    /**
     * instance count.
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * user password.
     */
    masterUserPassword?: pulumi.Input<string>;
    /**
     * memory size.
     */
    memory?: pulumi.Input<number>;
    /**
     * pay mode, the value is either PREPAID or POSTPAID_BY_HOUR.
     */
    payMode?: pulumi.Input<string>;
    /**
     * purchase time, required when PayMode is PREPAID, the value range is 1~60, default to 1.
     */
    period?: pulumi.Input<number>;
    /**
     * project id, default to 0, means default project.
     */
    projectId?: pulumi.Input<number>;
    /**
     * max storage, the unit is GB.
     */
    storage?: pulumi.Input<number>;
    /**
     * subnet id.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * vpc id.
     */
    vpcId?: pulumi.Input<string>;
    /**
     * available zone.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TdcpgCluster resource.
 */
export interface TdcpgClusterArgs {
    /**
     * cluster name.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * cpu cores.
     */
    cpu: pulumi.Input<number>;
    /**
     * community version number, default to 10.17.
     */
    dbVersion?: pulumi.Input<string>;
    /**
     * instance count.
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * user password.
     */
    masterUserPassword: pulumi.Input<string>;
    /**
     * memory size.
     */
    memory: pulumi.Input<number>;
    /**
     * pay mode, the value is either PREPAID or POSTPAID_BY_HOUR.
     */
    payMode: pulumi.Input<string>;
    /**
     * purchase time, required when PayMode is PREPAID, the value range is 1~60, default to 1.
     */
    period?: pulumi.Input<number>;
    /**
     * project id, default to 0, means default project.
     */
    projectId?: pulumi.Input<number>;
    /**
     * max storage, the unit is GB.
     */
    storage?: pulumi.Input<number>;
    /**
     * subnet id.
     */
    subnetId: pulumi.Input<string>;
    /**
     * vpc id.
     */
    vpcId: pulumi.Input<string>;
    /**
     * available zone.
     */
    zone: pulumi.Input<string>;
}
