// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class StorageBucketAcl extends pulumi.CustomResource {
    /**
     * Get an existing StorageBucketAcl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StorageBucketAclState, opts?: pulumi.CustomResourceOptions): StorageBucketAcl {
        return new StorageBucketAcl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/storageBucketAcl:StorageBucketAcl';

    /**
     * Returns true if the given object is an instance of StorageBucketAcl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageBucketAcl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageBucketAcl.__pulumiType;
    }

    /**
     * The name of the bucket it applies to.
     */
    public readonly bucket!: pulumi.Output<string>;
    /**
     * Configure this ACL to be the default ACL.
     */
    public readonly defaultAcl!: pulumi.Output<string | undefined>;
    /**
     * The canned GCS ACL to apply. Must be set if role_entity is not.
     */
    public readonly predefinedAcl!: pulumi.Output<string | undefined>;
    /**
     * List of role/entity pairs in the form ROLE:entity. See GCS Bucket ACL documentation for more details. Must be set if
     * predefined_acl is not.
     */
    public readonly roleEntities!: pulumi.Output<string[]>;

    /**
     * Create a StorageBucketAcl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageBucketAclArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StorageBucketAclArgs | StorageBucketAclState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StorageBucketAclState | undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["defaultAcl"] = state ? state.defaultAcl : undefined;
            resourceInputs["predefinedAcl"] = state ? state.predefinedAcl : undefined;
            resourceInputs["roleEntities"] = state ? state.roleEntities : undefined;
        } else {
            const args = argsOrState as StorageBucketAclArgs | undefined;
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["defaultAcl"] = args ? args.defaultAcl : undefined;
            resourceInputs["predefinedAcl"] = args ? args.predefinedAcl : undefined;
            resourceInputs["roleEntities"] = args ? args.roleEntities : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StorageBucketAcl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StorageBucketAcl resources.
 */
export interface StorageBucketAclState {
    /**
     * The name of the bucket it applies to.
     */
    bucket?: pulumi.Input<string>;
    /**
     * Configure this ACL to be the default ACL.
     */
    defaultAcl?: pulumi.Input<string>;
    /**
     * The canned GCS ACL to apply. Must be set if role_entity is not.
     */
    predefinedAcl?: pulumi.Input<string>;
    /**
     * List of role/entity pairs in the form ROLE:entity. See GCS Bucket ACL documentation for more details. Must be set if
     * predefined_acl is not.
     */
    roleEntities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a StorageBucketAcl resource.
 */
export interface StorageBucketAclArgs {
    /**
     * The name of the bucket it applies to.
     */
    bucket: pulumi.Input<string>;
    /**
     * Configure this ACL to be the default ACL.
     */
    defaultAcl?: pulumi.Input<string>;
    /**
     * The canned GCS ACL to apply. Must be set if role_entity is not.
     */
    predefinedAcl?: pulumi.Input<string>;
    /**
     * List of role/entity pairs in the form ROLE:entity. See GCS Bucket ACL documentation for more details. Must be set if
     * predefined_acl is not.
     */
    roleEntities?: pulumi.Input<pulumi.Input<string>[]>;
}
