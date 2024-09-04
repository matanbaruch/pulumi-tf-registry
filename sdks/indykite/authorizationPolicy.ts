// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AuthorizationPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AuthorizationPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuthorizationPolicyState, opts?: pulumi.CustomResourceOptions): AuthorizationPolicy {
        return new AuthorizationPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'indykite:index/authorizationPolicy:AuthorizationPolicy';

    /**
     * Returns true if the given object is an instance of AuthorizationPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuthorizationPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuthorizationPolicy.__pulumiType;
    }

    /**
     * identifier of Application Space
     */
    public /*out*/ readonly appSpaceId!: pulumi.Output<string>;
    /**
     * Timestamp when the Resource was created. Assigned by the server. A timestamp in RFC3339 UTC "Zulu" format, accurate to
     * nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * identifier of Customer
     */
    public /*out*/ readonly customerId!: pulumi.Output<string>;
    /**
     * Your own description of resource. Must be less than or equal to 256 UTF-8 bytes.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name for the instance. Can be updated without creating a new resource.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Configuration of Authorization Policy in JSON format, the same one exported by Console.
     */
    public readonly json!: pulumi.Output<string>;
    /**
     * identifier of Location, where to create resource
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Unique client assigned immutable identifier. Can not be updated without creating a new resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Status of the Authorization Policy. active, inactive
     */
    public readonly status!: pulumi.Output<string>;
    /**
     * Tags of the Authorization Policy.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.AuthorizationPolicyTimeouts | undefined>;
    /**
     * Timestamp when the Resource was last updated. Assigned by the server. A timestamp in RFC3339 UTC "Zulu" format, accurate
     * to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a AuthorizationPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizationPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AuthorizationPolicyArgs | AuthorizationPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AuthorizationPolicyState | undefined;
            resourceInputs["appSpaceId"] = state ? state.appSpaceId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["customerId"] = state ? state.customerId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["json"] = state ? state.json : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as AuthorizationPolicyArgs | undefined;
            if ((!args || args.json === undefined) && !opts.urn) {
                throw new Error("Missing required property 'json'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.status === undefined) && !opts.urn) {
                throw new Error("Missing required property 'status'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["json"] = args ? args.json : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["appSpaceId"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["customerId"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AuthorizationPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AuthorizationPolicy resources.
 */
export interface AuthorizationPolicyState {
    /**
     * identifier of Application Space
     */
    appSpaceId?: pulumi.Input<string>;
    /**
     * Timestamp when the Resource was created. Assigned by the server. A timestamp in RFC3339 UTC "Zulu" format, accurate to
     * nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    createTime?: pulumi.Input<string>;
    /**
     * identifier of Customer
     */
    customerId?: pulumi.Input<string>;
    /**
     * Your own description of resource. Must be less than or equal to 256 UTF-8 bytes.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name for the instance. Can be updated without creating a new resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Configuration of Authorization Policy in JSON format, the same one exported by Console.
     */
    json?: pulumi.Input<string>;
    /**
     * identifier of Location, where to create resource
     */
    location?: pulumi.Input<string>;
    /**
     * Unique client assigned immutable identifier. Can not be updated without creating a new resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Status of the Authorization Policy. active, inactive
     */
    status?: pulumi.Input<string>;
    /**
     * Tags of the Authorization Policy.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.AuthorizationPolicyTimeouts>;
    /**
     * Timestamp when the Resource was last updated. Assigned by the server. A timestamp in RFC3339 UTC "Zulu" format, accurate
     * to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AuthorizationPolicy resource.
 */
export interface AuthorizationPolicyArgs {
    /**
     * Your own description of resource. Must be less than or equal to 256 UTF-8 bytes.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name for the instance. Can be updated without creating a new resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Configuration of Authorization Policy in JSON format, the same one exported by Console.
     */
    json: pulumi.Input<string>;
    /**
     * identifier of Location, where to create resource
     */
    location: pulumi.Input<string>;
    /**
     * Unique client assigned immutable identifier. Can not be updated without creating a new resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Status of the Authorization Policy. active, inactive
     */
    status: pulumi.Input<string>;
    /**
     * Tags of the Authorization Policy.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.AuthorizationPolicyTimeouts>;
}
