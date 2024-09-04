// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AclUser extends pulumi.CustomResource {
    /**
     * Get an existing AclUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AclUserState, opts?: pulumi.CustomResourceOptions): AclUser {
        return new AclUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rediscloud:index/aclUser:AclUser';

    /**
     * Returns true if the given object is an instance of AclUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AclUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AclUser.__pulumiType;
    }

    /**
     * A meaningful name to identify the user
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The user's password
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * The role which the user has
     */
    public readonly role!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AclUserTimeouts | undefined>;

    /**
     * Create a AclUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AclUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AclUserArgs | AclUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AclUserState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AclUserArgs | undefined;
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(AclUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AclUser resources.
 */
export interface AclUserState {
    /**
     * A meaningful name to identify the user
     */
    name?: pulumi.Input<string>;
    /**
     * The user's password
     */
    password?: pulumi.Input<string>;
    /**
     * The role which the user has
     */
    role?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AclUserTimeouts>;
}

/**
 * The set of arguments for constructing a AclUser resource.
 */
export interface AclUserArgs {
    /**
     * A meaningful name to identify the user
     */
    name?: pulumi.Input<string>;
    /**
     * The user's password
     */
    password: pulumi.Input<string>;
    /**
     * The role which the user has
     */
    role: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AclUserTimeouts>;
}
