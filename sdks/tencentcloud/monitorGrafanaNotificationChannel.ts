// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MonitorGrafanaNotificationChannel extends pulumi.CustomResource {
    /**
     * Get an existing MonitorGrafanaNotificationChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MonitorGrafanaNotificationChannelState, opts?: pulumi.CustomResourceOptions): MonitorGrafanaNotificationChannel {
        return new MonitorGrafanaNotificationChannel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/monitorGrafanaNotificationChannel:MonitorGrafanaNotificationChannel';

    /**
     * Returns true if the given object is an instance of MonitorGrafanaNotificationChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MonitorGrafanaNotificationChannel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MonitorGrafanaNotificationChannel.__pulumiType;
    }

    /**
     * plugin id.
     */
    public /*out*/ readonly channelId!: pulumi.Output<string>;
    /**
     * channel name.
     */
    public readonly channelName!: pulumi.Output<string>;
    /**
     * extra grafana organization id list, default to 1 representing Main Org.
     */
    public readonly extraOrgIds!: pulumi.Output<string[] | undefined>;
    /**
     * grafana instance id.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Grafana organization which channel will be installed, default to 1 representing Main Org.
     */
    public readonly orgId!: pulumi.Output<number>;
    /**
     * cloud monitor notification template notice-id list.
     */
    public readonly receivers!: pulumi.Output<string[]>;

    /**
     * Create a MonitorGrafanaNotificationChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitorGrafanaNotificationChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MonitorGrafanaNotificationChannelArgs | MonitorGrafanaNotificationChannelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MonitorGrafanaNotificationChannelState | undefined;
            resourceInputs["channelId"] = state ? state.channelId : undefined;
            resourceInputs["channelName"] = state ? state.channelName : undefined;
            resourceInputs["extraOrgIds"] = state ? state.extraOrgIds : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["receivers"] = state ? state.receivers : undefined;
        } else {
            const args = argsOrState as MonitorGrafanaNotificationChannelArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["channelName"] = args ? args.channelName : undefined;
            resourceInputs["extraOrgIds"] = args ? args.extraOrgIds : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
            resourceInputs["receivers"] = args ? args.receivers : undefined;
            resourceInputs["channelId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MonitorGrafanaNotificationChannel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MonitorGrafanaNotificationChannel resources.
 */
export interface MonitorGrafanaNotificationChannelState {
    /**
     * plugin id.
     */
    channelId?: pulumi.Input<string>;
    /**
     * channel name.
     */
    channelName?: pulumi.Input<string>;
    /**
     * extra grafana organization id list, default to 1 representing Main Org.
     */
    extraOrgIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * grafana instance id.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Grafana organization which channel will be installed, default to 1 representing Main Org.
     */
    orgId?: pulumi.Input<number>;
    /**
     * cloud monitor notification template notice-id list.
     */
    receivers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a MonitorGrafanaNotificationChannel resource.
 */
export interface MonitorGrafanaNotificationChannelArgs {
    /**
     * channel name.
     */
    channelName?: pulumi.Input<string>;
    /**
     * extra grafana organization id list, default to 1 representing Main Org.
     */
    extraOrgIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * grafana instance id.
     */
    instanceId: pulumi.Input<string>;
    /**
     * Grafana organization which channel will be installed, default to 1 representing Main Org.
     */
    orgId?: pulumi.Input<number>;
    /**
     * cloud monitor notification template notice-id list.
     */
    receivers?: pulumi.Input<pulumi.Input<string>[]>;
}
