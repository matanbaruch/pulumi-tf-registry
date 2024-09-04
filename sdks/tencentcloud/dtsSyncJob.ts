// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DtsSyncJob extends pulumi.CustomResource {
    /**
     * Get an existing DtsSyncJob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DtsSyncJobState, opts?: pulumi.CustomResourceOptions): DtsSyncJob {
        return new DtsSyncJob(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dtsSyncJob:DtsSyncJob';

    /**
     * Returns true if the given object is an instance of DtsSyncJob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DtsSyncJob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DtsSyncJob.__pulumiType;
    }

    /**
     * auto renew.
     */
    public readonly autoRenew!: pulumi.Output<number>;
    /**
     * destination database type.
     */
    public readonly dstDatabaseType!: pulumi.Output<string>;
    /**
     * destination region.
     */
    public readonly dstRegion!: pulumi.Output<string>;
    /**
     * existed job id.
     */
    public readonly existedJobId!: pulumi.Output<string>;
    /**
     * instance class.
     */
    public readonly instanceClass!: pulumi.Output<string>;
    /**
     * job id.
     */
    public /*out*/ readonly jobId!: pulumi.Output<string>;
    /**
     * job name.
     */
    public readonly jobName!: pulumi.Output<string>;
    /**
     * pay mode, optional value is PrePay or PostPay.
     */
    public readonly payMode!: pulumi.Output<string>;
    /**
     * specification.
     */
    public readonly specification!: pulumi.Output<string>;
    /**
     * source database type.
     */
    public readonly srcDatabaseType!: pulumi.Output<string>;
    /**
     * source region.
     */
    public readonly srcRegion!: pulumi.Output<string>;
    /**
     * tags.
     */
    public readonly tags!: pulumi.Output<outputs.DtsSyncJobTag[] | undefined>;

    /**
     * Create a DtsSyncJob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DtsSyncJobArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DtsSyncJobArgs | DtsSyncJobState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DtsSyncJobState | undefined;
            resourceInputs["autoRenew"] = state ? state.autoRenew : undefined;
            resourceInputs["dstDatabaseType"] = state ? state.dstDatabaseType : undefined;
            resourceInputs["dstRegion"] = state ? state.dstRegion : undefined;
            resourceInputs["existedJobId"] = state ? state.existedJobId : undefined;
            resourceInputs["instanceClass"] = state ? state.instanceClass : undefined;
            resourceInputs["jobId"] = state ? state.jobId : undefined;
            resourceInputs["jobName"] = state ? state.jobName : undefined;
            resourceInputs["payMode"] = state ? state.payMode : undefined;
            resourceInputs["specification"] = state ? state.specification : undefined;
            resourceInputs["srcDatabaseType"] = state ? state.srcDatabaseType : undefined;
            resourceInputs["srcRegion"] = state ? state.srcRegion : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as DtsSyncJobArgs | undefined;
            if ((!args || args.dstDatabaseType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dstDatabaseType'");
            }
            if ((!args || args.dstRegion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dstRegion'");
            }
            if ((!args || args.payMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'payMode'");
            }
            if ((!args || args.srcDatabaseType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'srcDatabaseType'");
            }
            if ((!args || args.srcRegion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'srcRegion'");
            }
            resourceInputs["autoRenew"] = args ? args.autoRenew : undefined;
            resourceInputs["dstDatabaseType"] = args ? args.dstDatabaseType : undefined;
            resourceInputs["dstRegion"] = args ? args.dstRegion : undefined;
            resourceInputs["existedJobId"] = args ? args.existedJobId : undefined;
            resourceInputs["instanceClass"] = args ? args.instanceClass : undefined;
            resourceInputs["jobName"] = args ? args.jobName : undefined;
            resourceInputs["payMode"] = args ? args.payMode : undefined;
            resourceInputs["specification"] = args ? args.specification : undefined;
            resourceInputs["srcDatabaseType"] = args ? args.srcDatabaseType : undefined;
            resourceInputs["srcRegion"] = args ? args.srcRegion : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["jobId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DtsSyncJob.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DtsSyncJob resources.
 */
export interface DtsSyncJobState {
    /**
     * auto renew.
     */
    autoRenew?: pulumi.Input<number>;
    /**
     * destination database type.
     */
    dstDatabaseType?: pulumi.Input<string>;
    /**
     * destination region.
     */
    dstRegion?: pulumi.Input<string>;
    /**
     * existed job id.
     */
    existedJobId?: pulumi.Input<string>;
    /**
     * instance class.
     */
    instanceClass?: pulumi.Input<string>;
    /**
     * job id.
     */
    jobId?: pulumi.Input<string>;
    /**
     * job name.
     */
    jobName?: pulumi.Input<string>;
    /**
     * pay mode, optional value is PrePay or PostPay.
     */
    payMode?: pulumi.Input<string>;
    /**
     * specification.
     */
    specification?: pulumi.Input<string>;
    /**
     * source database type.
     */
    srcDatabaseType?: pulumi.Input<string>;
    /**
     * source region.
     */
    srcRegion?: pulumi.Input<string>;
    /**
     * tags.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DtsSyncJobTag>[]>;
}

/**
 * The set of arguments for constructing a DtsSyncJob resource.
 */
export interface DtsSyncJobArgs {
    /**
     * auto renew.
     */
    autoRenew?: pulumi.Input<number>;
    /**
     * destination database type.
     */
    dstDatabaseType: pulumi.Input<string>;
    /**
     * destination region.
     */
    dstRegion: pulumi.Input<string>;
    /**
     * existed job id.
     */
    existedJobId?: pulumi.Input<string>;
    /**
     * instance class.
     */
    instanceClass?: pulumi.Input<string>;
    /**
     * job name.
     */
    jobName?: pulumi.Input<string>;
    /**
     * pay mode, optional value is PrePay or PostPay.
     */
    payMode: pulumi.Input<string>;
    /**
     * specification.
     */
    specification?: pulumi.Input<string>;
    /**
     * source database type.
     */
    srcDatabaseType: pulumi.Input<string>;
    /**
     * source region.
     */
    srcRegion: pulumi.Input<string>;
    /**
     * tags.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DtsSyncJobTag>[]>;
}
