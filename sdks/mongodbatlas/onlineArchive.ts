// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OnlineArchive extends pulumi.CustomResource {
    /**
     * Get an existing OnlineArchive resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OnlineArchiveState, opts?: pulumi.CustomResourceOptions): OnlineArchive {
        return new OnlineArchive(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mongodbatlas:index/onlineArchive:OnlineArchive';

    /**
     * Returns true if the given object is an instance of OnlineArchive.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OnlineArchive {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OnlineArchive.__pulumiType;
    }

    public /*out*/ readonly archiveId!: pulumi.Output<string>;
    public readonly clusterName!: pulumi.Output<string>;
    public readonly collName!: pulumi.Output<string>;
    public readonly collectionType!: pulumi.Output<string>;
    public readonly criteria!: pulumi.Output<outputs.OnlineArchiveCriteria>;
    public readonly dataExpirationRule!: pulumi.Output<outputs.OnlineArchiveDataExpirationRule | undefined>;
    public readonly dataProcessRegion!: pulumi.Output<outputs.OnlineArchiveDataProcessRegion | undefined>;
    public readonly dbName!: pulumi.Output<string>;
    public readonly partitionFields!: pulumi.Output<outputs.OnlineArchivePartitionField[] | undefined>;
    public readonly paused!: pulumi.Output<boolean>;
    public readonly projectId!: pulumi.Output<string>;
    public readonly schedule!: pulumi.Output<outputs.OnlineArchiveSchedule | undefined>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly syncCreation!: pulumi.Output<boolean | undefined>;

    /**
     * Create a OnlineArchive resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OnlineArchiveArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OnlineArchiveArgs | OnlineArchiveState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OnlineArchiveState | undefined;
            resourceInputs["archiveId"] = state ? state.archiveId : undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["collName"] = state ? state.collName : undefined;
            resourceInputs["collectionType"] = state ? state.collectionType : undefined;
            resourceInputs["criteria"] = state ? state.criteria : undefined;
            resourceInputs["dataExpirationRule"] = state ? state.dataExpirationRule : undefined;
            resourceInputs["dataProcessRegion"] = state ? state.dataProcessRegion : undefined;
            resourceInputs["dbName"] = state ? state.dbName : undefined;
            resourceInputs["partitionFields"] = state ? state.partitionFields : undefined;
            resourceInputs["paused"] = state ? state.paused : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["syncCreation"] = state ? state.syncCreation : undefined;
        } else {
            const args = argsOrState as OnlineArchiveArgs | undefined;
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.collName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'collName'");
            }
            if ((!args || args.criteria === undefined) && !opts.urn) {
                throw new Error("Missing required property 'criteria'");
            }
            if ((!args || args.dbName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dbName'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["collName"] = args ? args.collName : undefined;
            resourceInputs["collectionType"] = args ? args.collectionType : undefined;
            resourceInputs["criteria"] = args ? args.criteria : undefined;
            resourceInputs["dataExpirationRule"] = args ? args.dataExpirationRule : undefined;
            resourceInputs["dataProcessRegion"] = args ? args.dataProcessRegion : undefined;
            resourceInputs["dbName"] = args ? args.dbName : undefined;
            resourceInputs["partitionFields"] = args ? args.partitionFields : undefined;
            resourceInputs["paused"] = args ? args.paused : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["syncCreation"] = args ? args.syncCreation : undefined;
            resourceInputs["archiveId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OnlineArchive.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OnlineArchive resources.
 */
export interface OnlineArchiveState {
    archiveId?: pulumi.Input<string>;
    clusterName?: pulumi.Input<string>;
    collName?: pulumi.Input<string>;
    collectionType?: pulumi.Input<string>;
    criteria?: pulumi.Input<inputs.OnlineArchiveCriteria>;
    dataExpirationRule?: pulumi.Input<inputs.OnlineArchiveDataExpirationRule>;
    dataProcessRegion?: pulumi.Input<inputs.OnlineArchiveDataProcessRegion>;
    dbName?: pulumi.Input<string>;
    partitionFields?: pulumi.Input<pulumi.Input<inputs.OnlineArchivePartitionField>[]>;
    paused?: pulumi.Input<boolean>;
    projectId?: pulumi.Input<string>;
    schedule?: pulumi.Input<inputs.OnlineArchiveSchedule>;
    state?: pulumi.Input<string>;
    syncCreation?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a OnlineArchive resource.
 */
export interface OnlineArchiveArgs {
    clusterName: pulumi.Input<string>;
    collName: pulumi.Input<string>;
    collectionType?: pulumi.Input<string>;
    criteria: pulumi.Input<inputs.OnlineArchiveCriteria>;
    dataExpirationRule?: pulumi.Input<inputs.OnlineArchiveDataExpirationRule>;
    dataProcessRegion?: pulumi.Input<inputs.OnlineArchiveDataProcessRegion>;
    dbName: pulumi.Input<string>;
    partitionFields?: pulumi.Input<pulumi.Input<inputs.OnlineArchivePartitionField>[]>;
    paused?: pulumi.Input<boolean>;
    projectId: pulumi.Input<string>;
    schedule?: pulumi.Input<inputs.OnlineArchiveSchedule>;
    syncCreation?: pulumi.Input<boolean>;
}
