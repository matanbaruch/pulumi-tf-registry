// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RabbitmqSecretBackendRole extends pulumi.CustomResource {
    /**
     * Get an existing RabbitmqSecretBackendRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RabbitmqSecretBackendRoleState, opts?: pulumi.CustomResourceOptions): RabbitmqSecretBackendRole {
        return new RabbitmqSecretBackendRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/rabbitmqSecretBackendRole:RabbitmqSecretBackendRole';

    /**
     * Returns true if the given object is an instance of RabbitmqSecretBackendRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RabbitmqSecretBackendRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RabbitmqSecretBackendRole.__pulumiType;
    }

    /**
     * The path of the Rabbitmq Secret Backend the role belongs to.
     */
    public readonly backend!: pulumi.Output<string>;
    /**
     * Unique name for the role.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Specifies a comma-separated RabbitMQ management tags.
     */
    public readonly tags!: pulumi.Output<string | undefined>;
    /**
     * Specifies a map of virtual hosts and exchanges to topic permissions. This option requires RabbitMQ 3.7.0 or later.
     */
    public readonly vhostTopics!: pulumi.Output<outputs.RabbitmqSecretBackendRoleVhostTopic[] | undefined>;
    /**
     * Specifies a map of virtual hosts to permissions.
     */
    public readonly vhosts!: pulumi.Output<outputs.RabbitmqSecretBackendRoleVhost[] | undefined>;

    /**
     * Create a RabbitmqSecretBackendRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RabbitmqSecretBackendRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RabbitmqSecretBackendRoleArgs | RabbitmqSecretBackendRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RabbitmqSecretBackendRoleState | undefined;
            resourceInputs["backend"] = state ? state.backend : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vhostTopics"] = state ? state.vhostTopics : undefined;
            resourceInputs["vhosts"] = state ? state.vhosts : undefined;
        } else {
            const args = argsOrState as RabbitmqSecretBackendRoleArgs | undefined;
            if ((!args || args.backend === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backend'");
            }
            resourceInputs["backend"] = args ? args.backend : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vhostTopics"] = args ? args.vhostTopics : undefined;
            resourceInputs["vhosts"] = args ? args.vhosts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RabbitmqSecretBackendRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RabbitmqSecretBackendRole resources.
 */
export interface RabbitmqSecretBackendRoleState {
    /**
     * The path of the Rabbitmq Secret Backend the role belongs to.
     */
    backend?: pulumi.Input<string>;
    /**
     * Unique name for the role.
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Specifies a comma-separated RabbitMQ management tags.
     */
    tags?: pulumi.Input<string>;
    /**
     * Specifies a map of virtual hosts and exchanges to topic permissions. This option requires RabbitMQ 3.7.0 or later.
     */
    vhostTopics?: pulumi.Input<pulumi.Input<inputs.RabbitmqSecretBackendRoleVhostTopic>[]>;
    /**
     * Specifies a map of virtual hosts to permissions.
     */
    vhosts?: pulumi.Input<pulumi.Input<inputs.RabbitmqSecretBackendRoleVhost>[]>;
}

/**
 * The set of arguments for constructing a RabbitmqSecretBackendRole resource.
 */
export interface RabbitmqSecretBackendRoleArgs {
    /**
     * The path of the Rabbitmq Secret Backend the role belongs to.
     */
    backend: pulumi.Input<string>;
    /**
     * Unique name for the role.
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Specifies a comma-separated RabbitMQ management tags.
     */
    tags?: pulumi.Input<string>;
    /**
     * Specifies a map of virtual hosts and exchanges to topic permissions. This option requires RabbitMQ 3.7.0 or later.
     */
    vhostTopics?: pulumi.Input<pulumi.Input<inputs.RabbitmqSecretBackendRoleVhostTopic>[]>;
    /**
     * Specifies a map of virtual hosts to permissions.
     */
    vhosts?: pulumi.Input<pulumi.Input<inputs.RabbitmqSecretBackendRoleVhost>[]>;
}
