// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RdsGlobalCluster extends pulumi.CustomResource {
    /**
     * Get an existing RdsGlobalCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RdsGlobalClusterState, opts?: pulumi.CustomResourceOptions): RdsGlobalCluster {
        return new RdsGlobalCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/rdsGlobalCluster:RdsGlobalCluster';

    /**
     * Returns true if the given object is an instance of RdsGlobalCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RdsGlobalCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RdsGlobalCluster.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly databaseName!: pulumi.Output<string | undefined>;
    public readonly deletionProtection!: pulumi.Output<boolean | undefined>;
    public readonly engine!: pulumi.Output<string>;
    public readonly engineLifecycleSupport!: pulumi.Output<string>;
    public readonly engineVersion!: pulumi.Output<string>;
    public /*out*/ readonly engineVersionActual!: pulumi.Output<string>;
    public readonly forceDestroy!: pulumi.Output<boolean | undefined>;
    public readonly globalClusterIdentifier!: pulumi.Output<string>;
    public /*out*/ readonly globalClusterMembers!: pulumi.Output<outputs.RdsGlobalClusterGlobalClusterMember[]>;
    public /*out*/ readonly globalClusterResourceId!: pulumi.Output<string>;
    public readonly sourceDbClusterIdentifier!: pulumi.Output<string>;
    public readonly storageEncrypted!: pulumi.Output<boolean>;
    public readonly timeouts!: pulumi.Output<outputs.RdsGlobalClusterTimeouts | undefined>;

    /**
     * Create a RdsGlobalCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RdsGlobalClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RdsGlobalClusterArgs | RdsGlobalClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RdsGlobalClusterState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["databaseName"] = state ? state.databaseName : undefined;
            resourceInputs["deletionProtection"] = state ? state.deletionProtection : undefined;
            resourceInputs["engine"] = state ? state.engine : undefined;
            resourceInputs["engineLifecycleSupport"] = state ? state.engineLifecycleSupport : undefined;
            resourceInputs["engineVersion"] = state ? state.engineVersion : undefined;
            resourceInputs["engineVersionActual"] = state ? state.engineVersionActual : undefined;
            resourceInputs["forceDestroy"] = state ? state.forceDestroy : undefined;
            resourceInputs["globalClusterIdentifier"] = state ? state.globalClusterIdentifier : undefined;
            resourceInputs["globalClusterMembers"] = state ? state.globalClusterMembers : undefined;
            resourceInputs["globalClusterResourceId"] = state ? state.globalClusterResourceId : undefined;
            resourceInputs["sourceDbClusterIdentifier"] = state ? state.sourceDbClusterIdentifier : undefined;
            resourceInputs["storageEncrypted"] = state ? state.storageEncrypted : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as RdsGlobalClusterArgs | undefined;
            if ((!args || args.globalClusterIdentifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'globalClusterIdentifier'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["deletionProtection"] = args ? args.deletionProtection : undefined;
            resourceInputs["engine"] = args ? args.engine : undefined;
            resourceInputs["engineLifecycleSupport"] = args ? args.engineLifecycleSupport : undefined;
            resourceInputs["engineVersion"] = args ? args.engineVersion : undefined;
            resourceInputs["forceDestroy"] = args ? args.forceDestroy : undefined;
            resourceInputs["globalClusterIdentifier"] = args ? args.globalClusterIdentifier : undefined;
            resourceInputs["sourceDbClusterIdentifier"] = args ? args.sourceDbClusterIdentifier : undefined;
            resourceInputs["storageEncrypted"] = args ? args.storageEncrypted : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["engineVersionActual"] = undefined /*out*/;
            resourceInputs["globalClusterMembers"] = undefined /*out*/;
            resourceInputs["globalClusterResourceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RdsGlobalCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RdsGlobalCluster resources.
 */
export interface RdsGlobalClusterState {
    arn?: pulumi.Input<string>;
    databaseName?: pulumi.Input<string>;
    deletionProtection?: pulumi.Input<boolean>;
    engine?: pulumi.Input<string>;
    engineLifecycleSupport?: pulumi.Input<string>;
    engineVersion?: pulumi.Input<string>;
    engineVersionActual?: pulumi.Input<string>;
    forceDestroy?: pulumi.Input<boolean>;
    globalClusterIdentifier?: pulumi.Input<string>;
    globalClusterMembers?: pulumi.Input<pulumi.Input<inputs.RdsGlobalClusterGlobalClusterMember>[]>;
    globalClusterResourceId?: pulumi.Input<string>;
    sourceDbClusterIdentifier?: pulumi.Input<string>;
    storageEncrypted?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.RdsGlobalClusterTimeouts>;
}

/**
 * The set of arguments for constructing a RdsGlobalCluster resource.
 */
export interface RdsGlobalClusterArgs {
    databaseName?: pulumi.Input<string>;
    deletionProtection?: pulumi.Input<boolean>;
    engine?: pulumi.Input<string>;
    engineLifecycleSupport?: pulumi.Input<string>;
    engineVersion?: pulumi.Input<string>;
    forceDestroy?: pulumi.Input<boolean>;
    globalClusterIdentifier: pulumi.Input<string>;
    sourceDbClusterIdentifier?: pulumi.Input<string>;
    storageEncrypted?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.RdsGlobalClusterTimeouts>;
}
