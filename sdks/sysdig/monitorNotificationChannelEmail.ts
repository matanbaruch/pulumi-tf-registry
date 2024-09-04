// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MonitorNotificationChannelEmail extends pulumi.CustomResource {
    /**
     * Get an existing MonitorNotificationChannelEmail resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MonitorNotificationChannelEmailState, opts?: pulumi.CustomResourceOptions): MonitorNotificationChannelEmail {
        return new MonitorNotificationChannelEmail(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sysdig:index/monitorNotificationChannelEmail:MonitorNotificationChannelEmail';

    /**
     * Returns true if the given object is an instance of MonitorNotificationChannelEmail.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MonitorNotificationChannelEmail {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MonitorNotificationChannelEmail.__pulumiType;
    }

    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly notifyWhenOk!: pulumi.Output<boolean | undefined>;
    public readonly notifyWhenResolved!: pulumi.Output<boolean | undefined>;
    public readonly recipients!: pulumi.Output<string[]>;
    public readonly sendTestNotification!: pulumi.Output<boolean | undefined>;
    public readonly shareWithCurrentTeam!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.MonitorNotificationChannelEmailTimeouts | undefined>;
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a MonitorNotificationChannelEmail resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitorNotificationChannelEmailArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MonitorNotificationChannelEmailArgs | MonitorNotificationChannelEmailState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MonitorNotificationChannelEmailState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifyWhenOk"] = state ? state.notifyWhenOk : undefined;
            resourceInputs["notifyWhenResolved"] = state ? state.notifyWhenResolved : undefined;
            resourceInputs["recipients"] = state ? state.recipients : undefined;
            resourceInputs["sendTestNotification"] = state ? state.sendTestNotification : undefined;
            resourceInputs["shareWithCurrentTeam"] = state ? state.shareWithCurrentTeam : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as MonitorNotificationChannelEmailArgs | undefined;
            if ((!args || args.recipients === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recipients'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notifyWhenOk"] = args ? args.notifyWhenOk : undefined;
            resourceInputs["notifyWhenResolved"] = args ? args.notifyWhenResolved : undefined;
            resourceInputs["recipients"] = args ? args.recipients : undefined;
            resourceInputs["sendTestNotification"] = args ? args.sendTestNotification : undefined;
            resourceInputs["shareWithCurrentTeam"] = args ? args.shareWithCurrentTeam : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MonitorNotificationChannelEmail.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MonitorNotificationChannelEmail resources.
 */
export interface MonitorNotificationChannelEmailState {
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    notifyWhenOk?: pulumi.Input<boolean>;
    notifyWhenResolved?: pulumi.Input<boolean>;
    recipients?: pulumi.Input<pulumi.Input<string>[]>;
    sendTestNotification?: pulumi.Input<boolean>;
    shareWithCurrentTeam?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.MonitorNotificationChannelEmailTimeouts>;
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a MonitorNotificationChannelEmail resource.
 */
export interface MonitorNotificationChannelEmailArgs {
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    notifyWhenOk?: pulumi.Input<boolean>;
    notifyWhenResolved?: pulumi.Input<boolean>;
    recipients: pulumi.Input<pulumi.Input<string>[]>;
    sendTestNotification?: pulumi.Input<boolean>;
    shareWithCurrentTeam?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.MonitorNotificationChannelEmailTimeouts>;
}
