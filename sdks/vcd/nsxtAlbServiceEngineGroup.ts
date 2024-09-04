// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NsxtAlbServiceEngineGroup extends pulumi.CustomResource {
    /**
     * Get an existing NsxtAlbServiceEngineGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NsxtAlbServiceEngineGroupState, opts?: pulumi.CustomResourceOptions): NsxtAlbServiceEngineGroup {
        return new NsxtAlbServiceEngineGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vcd:index/nsxtAlbServiceEngineGroup:NsxtAlbServiceEngineGroup';

    /**
     * Returns true if the given object is an instance of NsxtAlbServiceEngineGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NsxtAlbServiceEngineGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NsxtAlbServiceEngineGroup.__pulumiType;
    }

    /**
     * NSX-T ALB backing Cloud ID
     */
    public readonly albCloudId!: pulumi.Output<string>;
    /**
     * NSX-T ALB Service Engine Group deployed virtual services
     */
    public /*out*/ readonly deployedVirtualServices!: pulumi.Output<number>;
    /**
     * NSX-T ALB Service Engine Group description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * NSX-T ALB Service Engine Group HA mode
     */
    public /*out*/ readonly haMode!: pulumi.Output<string>;
    /**
     * NSX-T ALB Importable Service Engine Group Name
     */
    public readonly importableServiceEngineGroupName!: pulumi.Output<string>;
    /**
     * NSX-T ALB Service Engine Group maximum virtual services
     */
    public /*out*/ readonly maxVirtualServices!: pulumi.Output<number>;
    /**
     * NSX-T ALB Service Engine Group name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Boolean value that shows if virtual services are overallocated
     */
    public readonly overallocated!: pulumi.Output<boolean | undefined>;
    /**
     * NSX-T ALB Service Engine Group reservation model. One of 'DEDICATED', 'SHARED'
     */
    public readonly reservationModel!: pulumi.Output<string>;
    /**
     * NSX-T ALB Service Engine Group reserved virtual services
     */
    public /*out*/ readonly reservedVirtualServices!: pulumi.Output<number>;
    /**
     * Feature set for this ALB Service Engine Group. One of 'STANDARD', 'PREMIUM'.
     */
    public readonly supportedFeatureSet!: pulumi.Output<string>;
    /**
     * Boolean value that shows if sync should be performed on every refresh
     */
    public readonly syncOnRefresh!: pulumi.Output<boolean | undefined>;

    /**
     * Create a NsxtAlbServiceEngineGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NsxtAlbServiceEngineGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NsxtAlbServiceEngineGroupArgs | NsxtAlbServiceEngineGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NsxtAlbServiceEngineGroupState | undefined;
            resourceInputs["albCloudId"] = state ? state.albCloudId : undefined;
            resourceInputs["deployedVirtualServices"] = state ? state.deployedVirtualServices : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["haMode"] = state ? state.haMode : undefined;
            resourceInputs["importableServiceEngineGroupName"] = state ? state.importableServiceEngineGroupName : undefined;
            resourceInputs["maxVirtualServices"] = state ? state.maxVirtualServices : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["overallocated"] = state ? state.overallocated : undefined;
            resourceInputs["reservationModel"] = state ? state.reservationModel : undefined;
            resourceInputs["reservedVirtualServices"] = state ? state.reservedVirtualServices : undefined;
            resourceInputs["supportedFeatureSet"] = state ? state.supportedFeatureSet : undefined;
            resourceInputs["syncOnRefresh"] = state ? state.syncOnRefresh : undefined;
        } else {
            const args = argsOrState as NsxtAlbServiceEngineGroupArgs | undefined;
            if ((!args || args.albCloudId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'albCloudId'");
            }
            if ((!args || args.importableServiceEngineGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'importableServiceEngineGroupName'");
            }
            if ((!args || args.reservationModel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reservationModel'");
            }
            resourceInputs["albCloudId"] = args ? args.albCloudId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["importableServiceEngineGroupName"] = args ? args.importableServiceEngineGroupName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["overallocated"] = args ? args.overallocated : undefined;
            resourceInputs["reservationModel"] = args ? args.reservationModel : undefined;
            resourceInputs["supportedFeatureSet"] = args ? args.supportedFeatureSet : undefined;
            resourceInputs["syncOnRefresh"] = args ? args.syncOnRefresh : undefined;
            resourceInputs["deployedVirtualServices"] = undefined /*out*/;
            resourceInputs["haMode"] = undefined /*out*/;
            resourceInputs["maxVirtualServices"] = undefined /*out*/;
            resourceInputs["reservedVirtualServices"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NsxtAlbServiceEngineGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NsxtAlbServiceEngineGroup resources.
 */
export interface NsxtAlbServiceEngineGroupState {
    /**
     * NSX-T ALB backing Cloud ID
     */
    albCloudId?: pulumi.Input<string>;
    /**
     * NSX-T ALB Service Engine Group deployed virtual services
     */
    deployedVirtualServices?: pulumi.Input<number>;
    /**
     * NSX-T ALB Service Engine Group description
     */
    description?: pulumi.Input<string>;
    /**
     * NSX-T ALB Service Engine Group HA mode
     */
    haMode?: pulumi.Input<string>;
    /**
     * NSX-T ALB Importable Service Engine Group Name
     */
    importableServiceEngineGroupName?: pulumi.Input<string>;
    /**
     * NSX-T ALB Service Engine Group maximum virtual services
     */
    maxVirtualServices?: pulumi.Input<number>;
    /**
     * NSX-T ALB Service Engine Group name
     */
    name?: pulumi.Input<string>;
    /**
     * Boolean value that shows if virtual services are overallocated
     */
    overallocated?: pulumi.Input<boolean>;
    /**
     * NSX-T ALB Service Engine Group reservation model. One of 'DEDICATED', 'SHARED'
     */
    reservationModel?: pulumi.Input<string>;
    /**
     * NSX-T ALB Service Engine Group reserved virtual services
     */
    reservedVirtualServices?: pulumi.Input<number>;
    /**
     * Feature set for this ALB Service Engine Group. One of 'STANDARD', 'PREMIUM'.
     */
    supportedFeatureSet?: pulumi.Input<string>;
    /**
     * Boolean value that shows if sync should be performed on every refresh
     */
    syncOnRefresh?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a NsxtAlbServiceEngineGroup resource.
 */
export interface NsxtAlbServiceEngineGroupArgs {
    /**
     * NSX-T ALB backing Cloud ID
     */
    albCloudId: pulumi.Input<string>;
    /**
     * NSX-T ALB Service Engine Group description
     */
    description?: pulumi.Input<string>;
    /**
     * NSX-T ALB Importable Service Engine Group Name
     */
    importableServiceEngineGroupName: pulumi.Input<string>;
    /**
     * NSX-T ALB Service Engine Group name
     */
    name?: pulumi.Input<string>;
    /**
     * Boolean value that shows if virtual services are overallocated
     */
    overallocated?: pulumi.Input<boolean>;
    /**
     * NSX-T ALB Service Engine Group reservation model. One of 'DEDICATED', 'SHARED'
     */
    reservationModel: pulumi.Input<string>;
    /**
     * Feature set for this ALB Service Engine Group. One of 'STANDARD', 'PREMIUM'.
     */
    supportedFeatureSet?: pulumi.Input<string>;
    /**
     * Boolean value that shows if sync should be performed on every refresh
     */
    syncOnRefresh?: pulumi.Input<boolean>;
}
