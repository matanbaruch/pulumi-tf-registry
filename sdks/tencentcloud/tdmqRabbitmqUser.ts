// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TdmqRabbitmqUser extends pulumi.CustomResource {
    /**
     * Get an existing TdmqRabbitmqUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TdmqRabbitmqUserState, opts?: pulumi.CustomResourceOptions): TdmqRabbitmqUser {
        return new TdmqRabbitmqUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/tdmqRabbitmqUser:TdmqRabbitmqUser';

    /**
     * Returns true if the given object is an instance of TdmqRabbitmqUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TdmqRabbitmqUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TdmqRabbitmqUser.__pulumiType;
    }

    /**
     * Describe.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Cluster instance ID.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * The maximum number of channels for this user, if not filled in, there is no limit.
     */
    public readonly maxChannels!: pulumi.Output<number | undefined>;
    /**
     * The maximum number of connections for this user, if not filled in, there is no limit.
     */
    public readonly maxConnections!: pulumi.Output<number | undefined>;
    /**
     * Password, used when logging in.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * User tag, used to determine the permission range for changing user access to RabbitMQ Management. Management: regular
     * console user, monitoring: management console user, other values: non console user.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Username, used when logging in.
     */
    public readonly user!: pulumi.Output<string>;

    /**
     * Create a TdmqRabbitmqUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TdmqRabbitmqUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TdmqRabbitmqUserArgs | TdmqRabbitmqUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TdmqRabbitmqUserState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["maxChannels"] = state ? state.maxChannels : undefined;
            resourceInputs["maxConnections"] = state ? state.maxConnections : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as TdmqRabbitmqUserArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.user === undefined) && !opts.urn) {
                throw new Error("Missing required property 'user'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["maxChannels"] = args ? args.maxChannels : undefined;
            resourceInputs["maxConnections"] = args ? args.maxConnections : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(TdmqRabbitmqUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TdmqRabbitmqUser resources.
 */
export interface TdmqRabbitmqUserState {
    /**
     * Describe.
     */
    description?: pulumi.Input<string>;
    /**
     * Cluster instance ID.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * The maximum number of channels for this user, if not filled in, there is no limit.
     */
    maxChannels?: pulumi.Input<number>;
    /**
     * The maximum number of connections for this user, if not filled in, there is no limit.
     */
    maxConnections?: pulumi.Input<number>;
    /**
     * Password, used when logging in.
     */
    password?: pulumi.Input<string>;
    /**
     * User tag, used to determine the permission range for changing user access to RabbitMQ Management. Management: regular
     * console user, monitoring: management console user, other values: non console user.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Username, used when logging in.
     */
    user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TdmqRabbitmqUser resource.
 */
export interface TdmqRabbitmqUserArgs {
    /**
     * Describe.
     */
    description?: pulumi.Input<string>;
    /**
     * Cluster instance ID.
     */
    instanceId: pulumi.Input<string>;
    /**
     * The maximum number of channels for this user, if not filled in, there is no limit.
     */
    maxChannels?: pulumi.Input<number>;
    /**
     * The maximum number of connections for this user, if not filled in, there is no limit.
     */
    maxConnections?: pulumi.Input<number>;
    /**
     * Password, used when logging in.
     */
    password: pulumi.Input<string>;
    /**
     * User tag, used to determine the permission range for changing user access to RabbitMQ Management. Management: regular
     * console user, monitoring: management console user, other values: non console user.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Username, used when logging in.
     */
    user: pulumi.Input<string>;
}
