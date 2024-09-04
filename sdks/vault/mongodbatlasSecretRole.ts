// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MongodbatlasSecretRole extends pulumi.CustomResource {
    /**
     * Get an existing MongodbatlasSecretRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MongodbatlasSecretRoleState, opts?: pulumi.CustomResourceOptions): MongodbatlasSecretRole {
        return new MongodbatlasSecretRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/mongodbatlasSecretRole:MongodbatlasSecretRole';

    /**
     * Returns true if the given object is an instance of MongodbatlasSecretRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MongodbatlasSecretRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MongodbatlasSecretRole.__pulumiType;
    }

    /**
     * Whitelist entry in CIDR notation to be added for the API key
     */
    public readonly cidrBlocks!: pulumi.Output<string[] | undefined>;
    /**
     * IP address to be added to the whitelist for the API key
     */
    public readonly ipAddresses!: pulumi.Output<string[] | undefined>;
    /**
     * The maximum allowed lifetime of credentials issued using this role
     */
    public readonly maxTtl!: pulumi.Output<string | undefined>;
    /**
     * Path where MongoDB Atlas secret backend is mounted
     */
    public readonly mount!: pulumi.Output<string>;
    /**
     * Name of the role
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * ID for the organization to which the target API Key belongs
     */
    public readonly organizationId!: pulumi.Output<string | undefined>;
    /**
     * ID for the project to which the target API Key belongs
     */
    public readonly projectId!: pulumi.Output<string | undefined>;
    /**
     * Roles assigned when an org API key is assigned to a project API key
     */
    public readonly projectRoles!: pulumi.Output<string[] | undefined>;
    /**
     * List of roles that the API Key needs to have
     */
    public readonly roles!: pulumi.Output<string[]>;
    /**
     * Duration in seconds after which the issued credential should expire
     */
    public readonly ttl!: pulumi.Output<string | undefined>;

    /**
     * Create a MongodbatlasSecretRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MongodbatlasSecretRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MongodbatlasSecretRoleArgs | MongodbatlasSecretRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MongodbatlasSecretRoleState | undefined;
            resourceInputs["cidrBlocks"] = state ? state.cidrBlocks : undefined;
            resourceInputs["ipAddresses"] = state ? state.ipAddresses : undefined;
            resourceInputs["maxTtl"] = state ? state.maxTtl : undefined;
            resourceInputs["mount"] = state ? state.mount : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["projectRoles"] = state ? state.projectRoles : undefined;
            resourceInputs["roles"] = state ? state.roles : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
        } else {
            const args = argsOrState as MongodbatlasSecretRoleArgs | undefined;
            if ((!args || args.mount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mount'");
            }
            if ((!args || args.roles === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roles'");
            }
            resourceInputs["cidrBlocks"] = args ? args.cidrBlocks : undefined;
            resourceInputs["ipAddresses"] = args ? args.ipAddresses : undefined;
            resourceInputs["maxTtl"] = args ? args.maxTtl : undefined;
            resourceInputs["mount"] = args ? args.mount : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["projectRoles"] = args ? args.projectRoles : undefined;
            resourceInputs["roles"] = args ? args.roles : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MongodbatlasSecretRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MongodbatlasSecretRole resources.
 */
export interface MongodbatlasSecretRoleState {
    /**
     * Whitelist entry in CIDR notation to be added for the API key
     */
    cidrBlocks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IP address to be added to the whitelist for the API key
     */
    ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum allowed lifetime of credentials issued using this role
     */
    maxTtl?: pulumi.Input<string>;
    /**
     * Path where MongoDB Atlas secret backend is mounted
     */
    mount?: pulumi.Input<string>;
    /**
     * Name of the role
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * ID for the organization to which the target API Key belongs
     */
    organizationId?: pulumi.Input<string>;
    /**
     * ID for the project to which the target API Key belongs
     */
    projectId?: pulumi.Input<string>;
    /**
     * Roles assigned when an org API key is assigned to a project API key
     */
    projectRoles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of roles that the API Key needs to have
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Duration in seconds after which the issued credential should expire
     */
    ttl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MongodbatlasSecretRole resource.
 */
export interface MongodbatlasSecretRoleArgs {
    /**
     * Whitelist entry in CIDR notation to be added for the API key
     */
    cidrBlocks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IP address to be added to the whitelist for the API key
     */
    ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum allowed lifetime of credentials issued using this role
     */
    maxTtl?: pulumi.Input<string>;
    /**
     * Path where MongoDB Atlas secret backend is mounted
     */
    mount: pulumi.Input<string>;
    /**
     * Name of the role
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * ID for the organization to which the target API Key belongs
     */
    organizationId?: pulumi.Input<string>;
    /**
     * ID for the project to which the target API Key belongs
     */
    projectId?: pulumi.Input<string>;
    /**
     * Roles assigned when an org API key is assigned to a project API key
     */
    projectRoles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of roles that the API Key needs to have
     */
    roles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Duration in seconds after which the issued credential should expire
     */
    ttl?: pulumi.Input<string>;
}
