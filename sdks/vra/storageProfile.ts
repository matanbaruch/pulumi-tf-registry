// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class StorageProfile extends pulumi.CustomResource {
    /**
     * Get an existing StorageProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StorageProfileState, opts?: pulumi.CustomResourceOptions): StorageProfile {
        return new StorageProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vra:index/storageProfile:StorageProfile';

    /**
     * Returns true if the given object is an instance of StorageProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageProfile.__pulumiType;
    }

    /**
     * Id of the cloud account this storage profile belongs to.
     */
    public /*out*/ readonly cloudAccountId!: pulumi.Output<string>;
    /**
     * Date when the entity was created. The date is in ISO 8601 and UTC.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Indicates if this storage profile is a default profile.
     */
    public readonly defaultItem!: pulumi.Output<boolean>;
    /**
     * A human-friendly description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Map of storage properties that are to be applied on disk while provisioning.
     */
    public readonly diskProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Map of storage placements to know where the disk is provisioned.
     */
    public readonly diskTargetProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The id of the region as seen in the cloud provider for which this profile is defined.
     */
    public /*out*/ readonly externalRegionId!: pulumi.Output<string>;
    public /*out*/ readonly links!: pulumi.Output<outputs.StorageProfileLink[]>;
    /**
     * A human-friendly name for storage profile.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The id of the organization this entity belongs to.
     */
    public /*out*/ readonly orgId!: pulumi.Output<string>;
    /**
     * Email of the user that owns the entity.
     */
    public /*out*/ readonly owner!: pulumi.Output<string>;
    /**
     * The id of the region that is associated with the storage profile.
     */
    public readonly regionId!: pulumi.Output<string>;
    /**
     * Indicates whether this storage profile supports encryption or not.
     */
    public readonly supportsEncryption!: pulumi.Output<boolean>;
    public readonly tags!: pulumi.Output<outputs.StorageProfileTag[] | undefined>;
    /**
     * Date when the entity was last updated. The date is ISO 8601 and UTC.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a StorageProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StorageProfileArgs | StorageProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StorageProfileState | undefined;
            resourceInputs["cloudAccountId"] = state ? state.cloudAccountId : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["defaultItem"] = state ? state.defaultItem : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["diskProperties"] = state ? state.diskProperties : undefined;
            resourceInputs["diskTargetProperties"] = state ? state.diskTargetProperties : undefined;
            resourceInputs["externalRegionId"] = state ? state.externalRegionId : undefined;
            resourceInputs["links"] = state ? state.links : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["regionId"] = state ? state.regionId : undefined;
            resourceInputs["supportsEncryption"] = state ? state.supportsEncryption : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
        } else {
            const args = argsOrState as StorageProfileArgs | undefined;
            if ((!args || args.defaultItem === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultItem'");
            }
            if ((!args || args.regionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'regionId'");
            }
            resourceInputs["defaultItem"] = args ? args.defaultItem : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["diskProperties"] = args ? args.diskProperties : undefined;
            resourceInputs["diskTargetProperties"] = args ? args.diskTargetProperties : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["regionId"] = args ? args.regionId : undefined;
            resourceInputs["supportsEncryption"] = args ? args.supportsEncryption : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["cloudAccountId"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["externalRegionId"] = undefined /*out*/;
            resourceInputs["links"] = undefined /*out*/;
            resourceInputs["orgId"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StorageProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StorageProfile resources.
 */
export interface StorageProfileState {
    /**
     * Id of the cloud account this storage profile belongs to.
     */
    cloudAccountId?: pulumi.Input<string>;
    /**
     * Date when the entity was created. The date is in ISO 8601 and UTC.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Indicates if this storage profile is a default profile.
     */
    defaultItem?: pulumi.Input<boolean>;
    /**
     * A human-friendly description.
     */
    description?: pulumi.Input<string>;
    /**
     * Map of storage properties that are to be applied on disk while provisioning.
     */
    diskProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Map of storage placements to know where the disk is provisioned.
     */
    diskTargetProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The id of the region as seen in the cloud provider for which this profile is defined.
     */
    externalRegionId?: pulumi.Input<string>;
    links?: pulumi.Input<pulumi.Input<inputs.StorageProfileLink>[]>;
    /**
     * A human-friendly name for storage profile.
     */
    name?: pulumi.Input<string>;
    /**
     * The id of the organization this entity belongs to.
     */
    orgId?: pulumi.Input<string>;
    /**
     * Email of the user that owns the entity.
     */
    owner?: pulumi.Input<string>;
    /**
     * The id of the region that is associated with the storage profile.
     */
    regionId?: pulumi.Input<string>;
    /**
     * Indicates whether this storage profile supports encryption or not.
     */
    supportsEncryption?: pulumi.Input<boolean>;
    tags?: pulumi.Input<pulumi.Input<inputs.StorageProfileTag>[]>;
    /**
     * Date when the entity was last updated. The date is ISO 8601 and UTC.
     */
    updatedAt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a StorageProfile resource.
 */
export interface StorageProfileArgs {
    /**
     * Indicates if this storage profile is a default profile.
     */
    defaultItem: pulumi.Input<boolean>;
    /**
     * A human-friendly description.
     */
    description?: pulumi.Input<string>;
    /**
     * Map of storage properties that are to be applied on disk while provisioning.
     */
    diskProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Map of storage placements to know where the disk is provisioned.
     */
    diskTargetProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A human-friendly name for storage profile.
     */
    name?: pulumi.Input<string>;
    /**
     * The id of the region that is associated with the storage profile.
     */
    regionId: pulumi.Input<string>;
    /**
     * Indicates whether this storage profile supports encryption or not.
     */
    supportsEncryption?: pulumi.Input<boolean>;
    tags?: pulumi.Input<pulumi.Input<inputs.StorageProfileTag>[]>;
}
