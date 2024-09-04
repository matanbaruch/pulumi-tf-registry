// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WaitingRoomSettings extends pulumi.CustomResource {
    /**
     * Get an existing WaitingRoomSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WaitingRoomSettingsState, opts?: pulumi.CustomResourceOptions): WaitingRoomSettings {
        return new WaitingRoomSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/waitingRoomSettings:WaitingRoomSettings';

    /**
     * Returns true if the given object is an instance of WaitingRoomSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WaitingRoomSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WaitingRoomSettings.__pulumiType;
    }

    /**
     * Whether to allow verified search engine crawlers to bypass all waiting rooms on this zone. Defaults to `false`.
     */
    public readonly searchEngineCrawlerBypass!: pulumi.Output<boolean | undefined>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a WaitingRoomSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WaitingRoomSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WaitingRoomSettingsArgs | WaitingRoomSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WaitingRoomSettingsState | undefined;
            resourceInputs["searchEngineCrawlerBypass"] = state ? state.searchEngineCrawlerBypass : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as WaitingRoomSettingsArgs | undefined;
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            resourceInputs["searchEngineCrawlerBypass"] = args ? args.searchEngineCrawlerBypass : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WaitingRoomSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WaitingRoomSettings resources.
 */
export interface WaitingRoomSettingsState {
    /**
     * Whether to allow verified search engine crawlers to bypass all waiting rooms on this zone. Defaults to `false`.
     */
    searchEngineCrawlerBypass?: pulumi.Input<boolean>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WaitingRoomSettings resource.
 */
export interface WaitingRoomSettingsArgs {
    /**
     * Whether to allow verified search engine crawlers to bypass all waiting rooms on this zone. Defaults to `false`.
     */
    searchEngineCrawlerBypass?: pulumi.Input<boolean>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    zoneId: pulumi.Input<string>;
}
