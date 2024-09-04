// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class StorageDefaultObjectAccessControl extends pulumi.CustomResource {
    /**
     * Get an existing StorageDefaultObjectAccessControl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StorageDefaultObjectAccessControlState, opts?: pulumi.CustomResourceOptions): StorageDefaultObjectAccessControl {
        return new StorageDefaultObjectAccessControl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/storageDefaultObjectAccessControl:StorageDefaultObjectAccessControl';

    /**
     * Returns true if the given object is an instance of StorageDefaultObjectAccessControl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageDefaultObjectAccessControl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageDefaultObjectAccessControl.__pulumiType;
    }

    /**
     * The name of the bucket.
     */
    public readonly bucket!: pulumi.Output<string>;
    /**
     * The domain associated with the entity.
     */
    public /*out*/ readonly domain!: pulumi.Output<string>;
    /**
     * The email address associated with the entity.
     */
    public /*out*/ readonly email!: pulumi.Output<string>;
    /**
     * The entity holding the permission, in one of the following forms: * user-{{userId}} * user-{{email}} (such as
     * "user-liz@example.com") * group-{{groupId}} * group-{{email}} (such as "group-example@googlegroups.com") *
     * domain-{{domain}} (such as "domain-example.com") * project-team-{{projectId}} * allUsers * allAuthenticatedUsers
     */
    public readonly entity!: pulumi.Output<string>;
    /**
     * The ID for the entity
     */
    public /*out*/ readonly entityId!: pulumi.Output<string>;
    /**
     * The content generation of the object, if applied to an object.
     */
    public /*out*/ readonly generation!: pulumi.Output<number>;
    /**
     * The name of the object, if applied to an object.
     */
    public readonly object!: pulumi.Output<string | undefined>;
    /**
     * The project team associated with the entity
     */
    public /*out*/ readonly projectTeams!: pulumi.Output<outputs.StorageDefaultObjectAccessControlProjectTeam[]>;
    /**
     * The access permission for the entity. Possible values: ["OWNER", "READER"]
     */
    public readonly role!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.StorageDefaultObjectAccessControlTimeouts | undefined>;

    /**
     * Create a StorageDefaultObjectAccessControl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageDefaultObjectAccessControlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StorageDefaultObjectAccessControlArgs | StorageDefaultObjectAccessControlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StorageDefaultObjectAccessControlState | undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["entity"] = state ? state.entity : undefined;
            resourceInputs["entityId"] = state ? state.entityId : undefined;
            resourceInputs["generation"] = state ? state.generation : undefined;
            resourceInputs["object"] = state ? state.object : undefined;
            resourceInputs["projectTeams"] = state ? state.projectTeams : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as StorageDefaultObjectAccessControlArgs | undefined;
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            if ((!args || args.entity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entity'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["entity"] = args ? args.entity : undefined;
            resourceInputs["object"] = args ? args.object : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["domain"] = undefined /*out*/;
            resourceInputs["email"] = undefined /*out*/;
            resourceInputs["entityId"] = undefined /*out*/;
            resourceInputs["generation"] = undefined /*out*/;
            resourceInputs["projectTeams"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StorageDefaultObjectAccessControl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StorageDefaultObjectAccessControl resources.
 */
export interface StorageDefaultObjectAccessControlState {
    /**
     * The name of the bucket.
     */
    bucket?: pulumi.Input<string>;
    /**
     * The domain associated with the entity.
     */
    domain?: pulumi.Input<string>;
    /**
     * The email address associated with the entity.
     */
    email?: pulumi.Input<string>;
    /**
     * The entity holding the permission, in one of the following forms: * user-{{userId}} * user-{{email}} (such as
     * "user-liz@example.com") * group-{{groupId}} * group-{{email}} (such as "group-example@googlegroups.com") *
     * domain-{{domain}} (such as "domain-example.com") * project-team-{{projectId}} * allUsers * allAuthenticatedUsers
     */
    entity?: pulumi.Input<string>;
    /**
     * The ID for the entity
     */
    entityId?: pulumi.Input<string>;
    /**
     * The content generation of the object, if applied to an object.
     */
    generation?: pulumi.Input<number>;
    /**
     * The name of the object, if applied to an object.
     */
    object?: pulumi.Input<string>;
    /**
     * The project team associated with the entity
     */
    projectTeams?: pulumi.Input<pulumi.Input<inputs.StorageDefaultObjectAccessControlProjectTeam>[]>;
    /**
     * The access permission for the entity. Possible values: ["OWNER", "READER"]
     */
    role?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.StorageDefaultObjectAccessControlTimeouts>;
}

/**
 * The set of arguments for constructing a StorageDefaultObjectAccessControl resource.
 */
export interface StorageDefaultObjectAccessControlArgs {
    /**
     * The name of the bucket.
     */
    bucket: pulumi.Input<string>;
    /**
     * The entity holding the permission, in one of the following forms: * user-{{userId}} * user-{{email}} (such as
     * "user-liz@example.com") * group-{{groupId}} * group-{{email}} (such as "group-example@googlegroups.com") *
     * domain-{{domain}} (such as "domain-example.com") * project-team-{{projectId}} * allUsers * allAuthenticatedUsers
     */
    entity: pulumi.Input<string>;
    /**
     * The name of the object, if applied to an object.
     */
    object?: pulumi.Input<string>;
    /**
     * The access permission for the entity. Possible values: ["OWNER", "READER"]
     */
    role: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.StorageDefaultObjectAccessControlTimeouts>;
}
