// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MonitorProvider extends pulumi.CustomResource {
    /**
     * Get an existing MonitorProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MonitorProviderState, opts?: pulumi.CustomResourceOptions): MonitorProvider {
        return new MonitorProvider(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/monitorProvider:MonitorProvider';

    /**
     * Returns true if the given object is an instance of MonitorProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MonitorProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MonitorProvider.__pulumiType;
    }

    /**
     * The frequency with which this monitor provider should confirm the ability to access the server's encryption settings
     * database.
     */
    public readonly checkFrequency!: pulumi.Output<string>;
    /**
     * A description for this Monitor Provider
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * When the `type` attribute is set to: - One of [`memory-usage`, `stack-trace`,
     * `encryption-settings-database-accessibility`, `custom`, `active-operations`, `ssl-context`, `version`, `general`,
     * `disk-space-usage`, `system-info`, `client-connection`, `third-party`]: Indicates whether the Monitor Provider is
     * enabled for use. - `host-system`: Indicates whether the Host System Monitor Provider is enabled for use.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Monitor Provider. Each configuration property
     * should be given in the form 'name=value'.
     */
    public readonly extensionArguments!: pulumi.Output<string[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Monitor Provider.
     */
    public readonly extensionClass!: pulumi.Output<string | undefined>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * The behavior that the server should exhibit after a prolonged period of time when the encryption settings database
     * remains unreadable.
     */
    public readonly prolongedOutageBehavior!: pulumi.Output<string>;
    /**
     * The minimum length of time that an outage should persist before it is considered a prolonged outage. If an outage lasts
     * at least as long as this duration, then the server will take the action indicated by the prolonged-outage-behavior
     * property.
     */
    public readonly prolongedOutageDuration!: pulumi.Output<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.MonitorProviderRequiredAction[]>;
    /**
     * The type of Monitor Provider resource. Options are ['memory-usage', 'stack-trace',
     * 'encryption-settings-database-accessibility', 'custom', 'active-operations', 'ssl-context', 'version', 'host-system',
     * 'general', 'disk-space-usage', 'system-info', 'client-connection', 'third-party']
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a MonitorProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitorProviderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MonitorProviderArgs | MonitorProviderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MonitorProviderState | undefined;
            resourceInputs["checkFrequency"] = state ? state.checkFrequency : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["extensionArguments"] = state ? state.extensionArguments : undefined;
            resourceInputs["extensionClass"] = state ? state.extensionClass : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["prolongedOutageBehavior"] = state ? state.prolongedOutageBehavior : undefined;
            resourceInputs["prolongedOutageDuration"] = state ? state.prolongedOutageDuration : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as MonitorProviderArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["checkFrequency"] = args ? args.checkFrequency : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["extensionArguments"] = args ? args.extensionArguments : undefined;
            resourceInputs["extensionClass"] = args ? args.extensionClass : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["prolongedOutageBehavior"] = args ? args.prolongedOutageBehavior : undefined;
            resourceInputs["prolongedOutageDuration"] = args ? args.prolongedOutageDuration : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MonitorProvider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MonitorProvider resources.
 */
export interface MonitorProviderState {
    /**
     * The frequency with which this monitor provider should confirm the ability to access the server's encryption settings
     * database.
     */
    checkFrequency?: pulumi.Input<string>;
    /**
     * A description for this Monitor Provider
     */
    description?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`memory-usage`, `stack-trace`,
     * `encryption-settings-database-accessibility`, `custom`, `active-operations`, `ssl-context`, `version`, `general`,
     * `disk-space-usage`, `system-info`, `client-connection`, `third-party`]: Indicates whether the Monitor Provider is
     * enabled for use. - `host-system`: Indicates whether the Host System Monitor Provider is enabled for use.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Monitor Provider. Each configuration property
     * should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Monitor Provider.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The behavior that the server should exhibit after a prolonged period of time when the encryption settings database
     * remains unreadable.
     */
    prolongedOutageBehavior?: pulumi.Input<string>;
    /**
     * The minimum length of time that an outage should persist before it is considered a prolonged outage. If an outage lasts
     * at least as long as this duration, then the server will take the action indicated by the prolonged-outage-behavior
     * property.
     */
    prolongedOutageDuration?: pulumi.Input<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.MonitorProviderRequiredAction>[]>;
    /**
     * The type of Monitor Provider resource. Options are ['memory-usage', 'stack-trace',
     * 'encryption-settings-database-accessibility', 'custom', 'active-operations', 'ssl-context', 'version', 'host-system',
     * 'general', 'disk-space-usage', 'system-info', 'client-connection', 'third-party']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MonitorProvider resource.
 */
export interface MonitorProviderArgs {
    /**
     * The frequency with which this monitor provider should confirm the ability to access the server's encryption settings
     * database.
     */
    checkFrequency?: pulumi.Input<string>;
    /**
     * A description for this Monitor Provider
     */
    description?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`memory-usage`, `stack-trace`,
     * `encryption-settings-database-accessibility`, `custom`, `active-operations`, `ssl-context`, `version`, `general`,
     * `disk-space-usage`, `system-info`, `client-connection`, `third-party`]: Indicates whether the Monitor Provider is
     * enabled for use. - `host-system`: Indicates whether the Host System Monitor Provider is enabled for use.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Monitor Provider. Each configuration property
     * should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Monitor Provider.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * The behavior that the server should exhibit after a prolonged period of time when the encryption settings database
     * remains unreadable.
     */
    prolongedOutageBehavior?: pulumi.Input<string>;
    /**
     * The minimum length of time that an outage should persist before it is considered a prolonged outage. If an outage lasts
     * at least as long as this duration, then the server will take the action indicated by the prolonged-outage-behavior
     * property.
     */
    prolongedOutageDuration?: pulumi.Input<string>;
    /**
     * The type of Monitor Provider resource. Options are ['memory-usage', 'stack-trace',
     * 'encryption-settings-database-accessibility', 'custom', 'active-operations', 'ssl-context', 'version', 'host-system',
     * 'general', 'disk-space-usage', 'system-info', 'client-connection', 'third-party']
     */
    type: pulumi.Input<string>;
}
