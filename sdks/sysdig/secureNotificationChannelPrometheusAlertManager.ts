// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecureNotificationChannelPrometheusAlertManager extends pulumi.CustomResource {
    /**
     * Get an existing SecureNotificationChannelPrometheusAlertManager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecureNotificationChannelPrometheusAlertManagerState, opts?: pulumi.CustomResourceOptions): SecureNotificationChannelPrometheusAlertManager {
        return new SecureNotificationChannelPrometheusAlertManager(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sysdig:index/secureNotificationChannelPrometheusAlertManager:SecureNotificationChannelPrometheusAlertManager';

    /**
     * Returns true if the given object is an instance of SecureNotificationChannelPrometheusAlertManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecureNotificationChannelPrometheusAlertManager {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecureNotificationChannelPrometheusAlertManager.__pulumiType;
    }

    public readonly additionalHeaders!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly allowInsecureConnections!: pulumi.Output<boolean | undefined>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly notifyWhenOk!: pulumi.Output<boolean | undefined>;
    public readonly notifyWhenResolved!: pulumi.Output<boolean | undefined>;
    public readonly sendTestNotification!: pulumi.Output<boolean | undefined>;
    public readonly shareWithCurrentTeam!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.SecureNotificationChannelPrometheusAlertManagerTimeouts | undefined>;
    public readonly url!: pulumi.Output<string>;
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a SecureNotificationChannelPrometheusAlertManager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecureNotificationChannelPrometheusAlertManagerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecureNotificationChannelPrometheusAlertManagerArgs | SecureNotificationChannelPrometheusAlertManagerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecureNotificationChannelPrometheusAlertManagerState | undefined;
            resourceInputs["additionalHeaders"] = state ? state.additionalHeaders : undefined;
            resourceInputs["allowInsecureConnections"] = state ? state.allowInsecureConnections : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifyWhenOk"] = state ? state.notifyWhenOk : undefined;
            resourceInputs["notifyWhenResolved"] = state ? state.notifyWhenResolved : undefined;
            resourceInputs["sendTestNotification"] = state ? state.sendTestNotification : undefined;
            resourceInputs["shareWithCurrentTeam"] = state ? state.shareWithCurrentTeam : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as SecureNotificationChannelPrometheusAlertManagerArgs | undefined;
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["additionalHeaders"] = args ? args.additionalHeaders : undefined;
            resourceInputs["allowInsecureConnections"] = args ? args.allowInsecureConnections : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notifyWhenOk"] = args ? args.notifyWhenOk : undefined;
            resourceInputs["notifyWhenResolved"] = args ? args.notifyWhenResolved : undefined;
            resourceInputs["sendTestNotification"] = args ? args.sendTestNotification : undefined;
            resourceInputs["shareWithCurrentTeam"] = args ? args.shareWithCurrentTeam : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecureNotificationChannelPrometheusAlertManager.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecureNotificationChannelPrometheusAlertManager resources.
 */
export interface SecureNotificationChannelPrometheusAlertManagerState {
    additionalHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    allowInsecureConnections?: pulumi.Input<boolean>;
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    notifyWhenOk?: pulumi.Input<boolean>;
    notifyWhenResolved?: pulumi.Input<boolean>;
    sendTestNotification?: pulumi.Input<boolean>;
    shareWithCurrentTeam?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.SecureNotificationChannelPrometheusAlertManagerTimeouts>;
    url?: pulumi.Input<string>;
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SecureNotificationChannelPrometheusAlertManager resource.
 */
export interface SecureNotificationChannelPrometheusAlertManagerArgs {
    additionalHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    allowInsecureConnections?: pulumi.Input<boolean>;
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    notifyWhenOk?: pulumi.Input<boolean>;
    notifyWhenResolved?: pulumi.Input<boolean>;
    sendTestNotification?: pulumi.Input<boolean>;
    shareWithCurrentTeam?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.SecureNotificationChannelPrometheusAlertManagerTimeouts>;
    url: pulumi.Input<string>;
}
