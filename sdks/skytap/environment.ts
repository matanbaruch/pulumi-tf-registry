// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Environment extends pulumi.CustomResource {
    /**
     * Get an existing Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnvironmentState, opts?: pulumi.CustomResourceOptions): Environment {
        return new Environment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'skytap:index/environment:Environment';

    /**
     * Returns true if the given object is an instance of Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Environment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Environment.__pulumiType;
    }

    /**
     * User-defined description of the environment. Limited to 1000 characters. UTF-8 character type
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * If true, outbound internet is disabled for VMs in this environment
     */
    public readonly disableInternet!: pulumi.Output<boolean>;
    /**
     * Set of labels for the instance
     */
    public readonly labels!: pulumi.Output<outputs.EnvironmentLabel[] | undefined>;
    /**
     * User-defined name of the environment. Limited to 255 characters. UTF-8 character type
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Indicates whether networks in the environment can send outbound traffic
     *
     * @deprecated Deprecated
     */
    public readonly outboundTraffic!: pulumi.Output<boolean>;
    /**
     * Indicates whether networks within the environment can route traffic to one another
     */
    public readonly routable!: pulumi.Output<boolean>;
    /**
     * The date and time that the environment will be automatically shut down. Format: yyyy/mm/dd hh:mm:ss. By default, the
     * suspend time uses the UTC offset for the time zone defined in your user account settings. Optionally, a different UTC
     * offset can be supplied (for example: 2018/07/20 14:20:00 -0000). The value in the API response is converted to your time
     * zone
     */
    public readonly shutdownAtTime!: pulumi.Output<string | undefined>;
    /**
     * The number of seconds an environment can be idle before it is automatically shut down. Valid range: 300 to 86400 seconds
     * (5 minutes to 1 day)
     */
    public readonly shutdownOnIdle!: pulumi.Output<number | undefined>;
    /**
     * The date and time that the environment will be automatically suspended. Format: yyyy/mm/dd hh:mm:ss. By default, the
     * suspend time uses the UTC offset for the time zone defined in your user account settings. Optionally, a different UTC
     * offset can be supplied (for example: 2018/07/20 14:20:00 -0000). The value in the API response is converted to your time
     * zone
     */
    public readonly suspendAtTime!: pulumi.Output<string | undefined>;
    /**
     * The number of seconds an environment can be idle before it is automatically suspended. Valid range: 300 to 86400 seconds
     * (5 minutes to 1 day)
     */
    public readonly suspendOnIdle!: pulumi.Output<number | undefined>;
    /**
     * Set of environment tags
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * ID of the template you want to create the environment from. If updated with a new ID, the environment will be recreated
     */
    public readonly templateId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.EnvironmentTimeouts | undefined>;
    /**
     * Environment user data, available from the metadata server and the Skytap API
     */
    public readonly userData!: pulumi.Output<string | undefined>;

    /**
     * Create a Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnvironmentArgs | EnvironmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnvironmentState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disableInternet"] = state ? state.disableInternet : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outboundTraffic"] = state ? state.outboundTraffic : undefined;
            resourceInputs["routable"] = state ? state.routable : undefined;
            resourceInputs["shutdownAtTime"] = state ? state.shutdownAtTime : undefined;
            resourceInputs["shutdownOnIdle"] = state ? state.shutdownOnIdle : undefined;
            resourceInputs["suspendAtTime"] = state ? state.suspendAtTime : undefined;
            resourceInputs["suspendOnIdle"] = state ? state.suspendOnIdle : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["templateId"] = state ? state.templateId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userData"] = state ? state.userData : undefined;
        } else {
            const args = argsOrState as EnvironmentArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.templateId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disableInternet"] = args ? args.disableInternet : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outboundTraffic"] = args ? args.outboundTraffic : undefined;
            resourceInputs["routable"] = args ? args.routable : undefined;
            resourceInputs["shutdownAtTime"] = args ? args.shutdownAtTime : undefined;
            resourceInputs["shutdownOnIdle"] = args ? args.shutdownOnIdle : undefined;
            resourceInputs["suspendAtTime"] = args ? args.suspendAtTime : undefined;
            resourceInputs["suspendOnIdle"] = args ? args.suspendOnIdle : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateId"] = args ? args.templateId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userData"] = args ? args.userData : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Environment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Environment resources.
 */
export interface EnvironmentState {
    /**
     * User-defined description of the environment. Limited to 1000 characters. UTF-8 character type
     */
    description?: pulumi.Input<string>;
    /**
     * If true, outbound internet is disabled for VMs in this environment
     */
    disableInternet?: pulumi.Input<boolean>;
    /**
     * Set of labels for the instance
     */
    labels?: pulumi.Input<pulumi.Input<inputs.EnvironmentLabel>[]>;
    /**
     * User-defined name of the environment. Limited to 255 characters. UTF-8 character type
     */
    name?: pulumi.Input<string>;
    /**
     * Indicates whether networks in the environment can send outbound traffic
     *
     * @deprecated Deprecated
     */
    outboundTraffic?: pulumi.Input<boolean>;
    /**
     * Indicates whether networks within the environment can route traffic to one another
     */
    routable?: pulumi.Input<boolean>;
    /**
     * The date and time that the environment will be automatically shut down. Format: yyyy/mm/dd hh:mm:ss. By default, the
     * suspend time uses the UTC offset for the time zone defined in your user account settings. Optionally, a different UTC
     * offset can be supplied (for example: 2018/07/20 14:20:00 -0000). The value in the API response is converted to your time
     * zone
     */
    shutdownAtTime?: pulumi.Input<string>;
    /**
     * The number of seconds an environment can be idle before it is automatically shut down. Valid range: 300 to 86400 seconds
     * (5 minutes to 1 day)
     */
    shutdownOnIdle?: pulumi.Input<number>;
    /**
     * The date and time that the environment will be automatically suspended. Format: yyyy/mm/dd hh:mm:ss. By default, the
     * suspend time uses the UTC offset for the time zone defined in your user account settings. Optionally, a different UTC
     * offset can be supplied (for example: 2018/07/20 14:20:00 -0000). The value in the API response is converted to your time
     * zone
     */
    suspendAtTime?: pulumi.Input<string>;
    /**
     * The number of seconds an environment can be idle before it is automatically suspended. Valid range: 300 to 86400 seconds
     * (5 minutes to 1 day)
     */
    suspendOnIdle?: pulumi.Input<number>;
    /**
     * Set of environment tags
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of the template you want to create the environment from. If updated with a new ID, the environment will be recreated
     */
    templateId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EnvironmentTimeouts>;
    /**
     * Environment user data, available from the metadata server and the Skytap API
     */
    userData?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Environment resource.
 */
export interface EnvironmentArgs {
    /**
     * User-defined description of the environment. Limited to 1000 characters. UTF-8 character type
     */
    description: pulumi.Input<string>;
    /**
     * If true, outbound internet is disabled for VMs in this environment
     */
    disableInternet?: pulumi.Input<boolean>;
    /**
     * Set of labels for the instance
     */
    labels?: pulumi.Input<pulumi.Input<inputs.EnvironmentLabel>[]>;
    /**
     * User-defined name of the environment. Limited to 255 characters. UTF-8 character type
     */
    name?: pulumi.Input<string>;
    /**
     * Indicates whether networks in the environment can send outbound traffic
     *
     * @deprecated Deprecated
     */
    outboundTraffic?: pulumi.Input<boolean>;
    /**
     * Indicates whether networks within the environment can route traffic to one another
     */
    routable?: pulumi.Input<boolean>;
    /**
     * The date and time that the environment will be automatically shut down. Format: yyyy/mm/dd hh:mm:ss. By default, the
     * suspend time uses the UTC offset for the time zone defined in your user account settings. Optionally, a different UTC
     * offset can be supplied (for example: 2018/07/20 14:20:00 -0000). The value in the API response is converted to your time
     * zone
     */
    shutdownAtTime?: pulumi.Input<string>;
    /**
     * The number of seconds an environment can be idle before it is automatically shut down. Valid range: 300 to 86400 seconds
     * (5 minutes to 1 day)
     */
    shutdownOnIdle?: pulumi.Input<number>;
    /**
     * The date and time that the environment will be automatically suspended. Format: yyyy/mm/dd hh:mm:ss. By default, the
     * suspend time uses the UTC offset for the time zone defined in your user account settings. Optionally, a different UTC
     * offset can be supplied (for example: 2018/07/20 14:20:00 -0000). The value in the API response is converted to your time
     * zone
     */
    suspendAtTime?: pulumi.Input<string>;
    /**
     * The number of seconds an environment can be idle before it is automatically suspended. Valid range: 300 to 86400 seconds
     * (5 minutes to 1 day)
     */
    suspendOnIdle?: pulumi.Input<number>;
    /**
     * Set of environment tags
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of the template you want to create the environment from. If updated with a new ID, the environment will be recreated
     */
    templateId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EnvironmentTimeouts>;
    /**
     * Environment user data, available from the metadata server and the Skytap API
     */
    userData?: pulumi.Input<string>;
}
