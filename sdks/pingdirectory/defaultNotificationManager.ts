// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DefaultNotificationManager extends pulumi.CustomResource {
    /**
     * Get an existing DefaultNotificationManager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultNotificationManagerState, opts?: pulumi.CustomResourceOptions): DefaultNotificationManager {
        return new DefaultNotificationManager(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/defaultNotificationManager:DefaultNotificationManager';

    /**
     * Returns true if the given object is an instance of DefaultNotificationManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultNotificationManager {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultNotificationManager.__pulumiType;
    }

    /**
     * A description for this Notification Manager
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Indicates whether this Notification Manager is enabled within the server.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Notification Manager. Each configuration
     * property should be given in the form 'name=value'.
     */
    public readonly extensionArguments!: pulumi.Output<string[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Notification Manager.
     */
    public readonly extensionClass!: pulumi.Output<string>;
    /**
     * Enables monitor entries for this Notification Manager.
     */
    public readonly monitorEntriesEnabled!: pulumi.Output<boolean>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.DefaultNotificationManagerRequiredAction[]>;
    /**
     * Specifies the DN of the entry below which subscription data is stored for this Notification Manager. This needs to be in
     * the backend that has the data to be notified on, and must not be the same entry as the backend base DN. The subscription
     * base DN entry does not need to exist as it will be created by the server.
     */
    public readonly subscriptionBaseDn!: pulumi.Output<string>;
    /**
     * Specifies how the operations in an external transaction (e.g. a multi-update extended operation or an LDAP transaction)
     * are notified for this Notification Manager.
     */
    public readonly transactionNotification!: pulumi.Output<string>;
    /**
     * The type of Notification Manager resource. Options are ['third-party']
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefaultNotificationManager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DefaultNotificationManagerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultNotificationManagerArgs | DefaultNotificationManagerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultNotificationManagerState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["extensionArguments"] = state ? state.extensionArguments : undefined;
            resourceInputs["extensionClass"] = state ? state.extensionClass : undefined;
            resourceInputs["monitorEntriesEnabled"] = state ? state.monitorEntriesEnabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["subscriptionBaseDn"] = state ? state.subscriptionBaseDn : undefined;
            resourceInputs["transactionNotification"] = state ? state.transactionNotification : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DefaultNotificationManagerArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["extensionArguments"] = args ? args.extensionArguments : undefined;
            resourceInputs["extensionClass"] = args ? args.extensionClass : undefined;
            resourceInputs["monitorEntriesEnabled"] = args ? args.monitorEntriesEnabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["subscriptionBaseDn"] = args ? args.subscriptionBaseDn : undefined;
            resourceInputs["transactionNotification"] = args ? args.transactionNotification : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DefaultNotificationManager.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultNotificationManager resources.
 */
export interface DefaultNotificationManagerState {
    /**
     * A description for this Notification Manager
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether this Notification Manager is enabled within the server.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Notification Manager. Each configuration
     * property should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Notification Manager.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Enables monitor entries for this Notification Manager.
     */
    monitorEntriesEnabled?: pulumi.Input<boolean>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.DefaultNotificationManagerRequiredAction>[]>;
    /**
     * Specifies the DN of the entry below which subscription data is stored for this Notification Manager. This needs to be in
     * the backend that has the data to be notified on, and must not be the same entry as the backend base DN. The subscription
     * base DN entry does not need to exist as it will be created by the server.
     */
    subscriptionBaseDn?: pulumi.Input<string>;
    /**
     * Specifies how the operations in an external transaction (e.g. a multi-update extended operation or an LDAP transaction)
     * are notified for this Notification Manager.
     */
    transactionNotification?: pulumi.Input<string>;
    /**
     * The type of Notification Manager resource. Options are ['third-party']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultNotificationManager resource.
 */
export interface DefaultNotificationManagerArgs {
    /**
     * A description for this Notification Manager
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether this Notification Manager is enabled within the server.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Notification Manager. Each configuration
     * property should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Notification Manager.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Enables monitor entries for this Notification Manager.
     */
    monitorEntriesEnabled?: pulumi.Input<boolean>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the DN of the entry below which subscription data is stored for this Notification Manager. This needs to be in
     * the backend that has the data to be notified on, and must not be the same entry as the backend base DN. The subscription
     * base DN entry does not need to exist as it will be created by the server.
     */
    subscriptionBaseDn?: pulumi.Input<string>;
    /**
     * Specifies how the operations in an external transaction (e.g. a multi-update extended operation or an LDAP transaction)
     * are notified for this Notification Manager.
     */
    transactionNotification?: pulumi.Input<string>;
}
