// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CassandraCluster extends pulumi.CustomResource {
    /**
     * Get an existing CassandraCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CassandraClusterState, opts?: pulumi.CustomResourceOptions): CassandraCluster {
        return new CassandraCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/cassandraCluster:CassandraCluster';

    /**
     * Returns true if the given object is an instance of CassandraCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CassandraCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CassandraCluster.__pulumiType;
    }

    public readonly autoRenew!: pulumi.Output<boolean | undefined>;
    public readonly autoRenewPeriod!: pulumi.Output<number | undefined>;
    public readonly clusterName!: pulumi.Output<string | undefined>;
    public readonly dataCenterName!: pulumi.Output<string | undefined>;
    public readonly diskSize!: pulumi.Output<number | undefined>;
    public readonly diskType!: pulumi.Output<string | undefined>;
    public readonly enablePublic!: pulumi.Output<boolean | undefined>;
    public readonly instanceType!: pulumi.Output<string>;
    public readonly ipWhite!: pulumi.Output<string>;
    public readonly maintainEndTime!: pulumi.Output<string | undefined>;
    public readonly maintainStartTime!: pulumi.Output<string | undefined>;
    public readonly majorVersion!: pulumi.Output<string>;
    public readonly nodeCount!: pulumi.Output<number>;
    public readonly password!: pulumi.Output<string | undefined>;
    public readonly payType!: pulumi.Output<string>;
    public readonly period!: pulumi.Output<number | undefined>;
    public readonly periodUnit!: pulumi.Output<string | undefined>;
    public /*out*/ readonly publicPoints!: pulumi.Output<string[]>;
    public readonly securityGroups!: pulumi.Output<string[]>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.CassandraClusterTimeouts | undefined>;
    public readonly vswitchId!: pulumi.Output<string>;
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a CassandraCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CassandraClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CassandraClusterArgs | CassandraClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CassandraClusterState | undefined;
            resourceInputs["autoRenew"] = state ? state.autoRenew : undefined;
            resourceInputs["autoRenewPeriod"] = state ? state.autoRenewPeriod : undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["dataCenterName"] = state ? state.dataCenterName : undefined;
            resourceInputs["diskSize"] = state ? state.diskSize : undefined;
            resourceInputs["diskType"] = state ? state.diskType : undefined;
            resourceInputs["enablePublic"] = state ? state.enablePublic : undefined;
            resourceInputs["instanceType"] = state ? state.instanceType : undefined;
            resourceInputs["ipWhite"] = state ? state.ipWhite : undefined;
            resourceInputs["maintainEndTime"] = state ? state.maintainEndTime : undefined;
            resourceInputs["maintainStartTime"] = state ? state.maintainStartTime : undefined;
            resourceInputs["majorVersion"] = state ? state.majorVersion : undefined;
            resourceInputs["nodeCount"] = state ? state.nodeCount : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["payType"] = state ? state.payType : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["periodUnit"] = state ? state.periodUnit : undefined;
            resourceInputs["publicPoints"] = state ? state.publicPoints : undefined;
            resourceInputs["securityGroups"] = state ? state.securityGroups : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vswitchId"] = state ? state.vswitchId : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as CassandraClusterArgs | undefined;
            if ((!args || args.instanceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceType'");
            }
            if ((!args || args.majorVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'majorVersion'");
            }
            if ((!args || args.nodeCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nodeCount'");
            }
            if ((!args || args.payType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'payType'");
            }
            if ((!args || args.vswitchId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vswitchId'");
            }
            resourceInputs["autoRenew"] = args ? args.autoRenew : undefined;
            resourceInputs["autoRenewPeriod"] = args ? args.autoRenewPeriod : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["dataCenterName"] = args ? args.dataCenterName : undefined;
            resourceInputs["diskSize"] = args ? args.diskSize : undefined;
            resourceInputs["diskType"] = args ? args.diskType : undefined;
            resourceInputs["enablePublic"] = args ? args.enablePublic : undefined;
            resourceInputs["instanceType"] = args ? args.instanceType : undefined;
            resourceInputs["ipWhite"] = args ? args.ipWhite : undefined;
            resourceInputs["maintainEndTime"] = args ? args.maintainEndTime : undefined;
            resourceInputs["maintainStartTime"] = args ? args.maintainStartTime : undefined;
            resourceInputs["majorVersion"] = args ? args.majorVersion : undefined;
            resourceInputs["nodeCount"] = args ? args.nodeCount : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["payType"] = args ? args.payType : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["periodUnit"] = args ? args.periodUnit : undefined;
            resourceInputs["securityGroups"] = args ? args.securityGroups : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vswitchId"] = args ? args.vswitchId : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
            resourceInputs["publicPoints"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CassandraCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CassandraCluster resources.
 */
export interface CassandraClusterState {
    autoRenew?: pulumi.Input<boolean>;
    autoRenewPeriod?: pulumi.Input<number>;
    clusterName?: pulumi.Input<string>;
    dataCenterName?: pulumi.Input<string>;
    diskSize?: pulumi.Input<number>;
    diskType?: pulumi.Input<string>;
    enablePublic?: pulumi.Input<boolean>;
    instanceType?: pulumi.Input<string>;
    ipWhite?: pulumi.Input<string>;
    maintainEndTime?: pulumi.Input<string>;
    maintainStartTime?: pulumi.Input<string>;
    majorVersion?: pulumi.Input<string>;
    nodeCount?: pulumi.Input<number>;
    password?: pulumi.Input<string>;
    payType?: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    periodUnit?: pulumi.Input<string>;
    publicPoints?: pulumi.Input<pulumi.Input<string>[]>;
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.CassandraClusterTimeouts>;
    vswitchId?: pulumi.Input<string>;
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CassandraCluster resource.
 */
export interface CassandraClusterArgs {
    autoRenew?: pulumi.Input<boolean>;
    autoRenewPeriod?: pulumi.Input<number>;
    clusterName?: pulumi.Input<string>;
    dataCenterName?: pulumi.Input<string>;
    diskSize?: pulumi.Input<number>;
    diskType?: pulumi.Input<string>;
    enablePublic?: pulumi.Input<boolean>;
    instanceType: pulumi.Input<string>;
    ipWhite?: pulumi.Input<string>;
    maintainEndTime?: pulumi.Input<string>;
    maintainStartTime?: pulumi.Input<string>;
    majorVersion: pulumi.Input<string>;
    nodeCount: pulumi.Input<number>;
    password?: pulumi.Input<string>;
    payType: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    periodUnit?: pulumi.Input<string>;
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.CassandraClusterTimeouts>;
    vswitchId: pulumi.Input<string>;
    zoneId?: pulumi.Input<string>;
}
