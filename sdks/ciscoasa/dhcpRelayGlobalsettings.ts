// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DhcpRelayGlobalsettings extends pulumi.CustomResource {
    /**
     * Get an existing DhcpRelayGlobalsettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DhcpRelayGlobalsettingsState, opts?: pulumi.CustomResourceOptions): DhcpRelayGlobalsettings {
        return new DhcpRelayGlobalsettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ciscoasa:index/dhcpRelayGlobalsettings:DhcpRelayGlobalsettings';

    /**
     * Returns true if the given object is an instance of DhcpRelayGlobalsettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DhcpRelayGlobalsettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DhcpRelayGlobalsettings.__pulumiType;
    }

    public readonly ipv4Timeout!: pulumi.Output<number | undefined>;
    public readonly ipv6Timeout!: pulumi.Output<number | undefined>;
    public readonly trustedOnAllInterfaces!: pulumi.Output<boolean | undefined>;

    /**
     * Create a DhcpRelayGlobalsettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DhcpRelayGlobalsettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DhcpRelayGlobalsettingsArgs | DhcpRelayGlobalsettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DhcpRelayGlobalsettingsState | undefined;
            resourceInputs["ipv4Timeout"] = state ? state.ipv4Timeout : undefined;
            resourceInputs["ipv6Timeout"] = state ? state.ipv6Timeout : undefined;
            resourceInputs["trustedOnAllInterfaces"] = state ? state.trustedOnAllInterfaces : undefined;
        } else {
            const args = argsOrState as DhcpRelayGlobalsettingsArgs | undefined;
            resourceInputs["ipv4Timeout"] = args ? args.ipv4Timeout : undefined;
            resourceInputs["ipv6Timeout"] = args ? args.ipv6Timeout : undefined;
            resourceInputs["trustedOnAllInterfaces"] = args ? args.trustedOnAllInterfaces : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DhcpRelayGlobalsettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DhcpRelayGlobalsettings resources.
 */
export interface DhcpRelayGlobalsettingsState {
    ipv4Timeout?: pulumi.Input<number>;
    ipv6Timeout?: pulumi.Input<number>;
    trustedOnAllInterfaces?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a DhcpRelayGlobalsettings resource.
 */
export interface DhcpRelayGlobalsettingsArgs {
    ipv4Timeout?: pulumi.Input<number>;
    ipv6Timeout?: pulumi.Input<number>;
    trustedOnAllInterfaces?: pulumi.Input<boolean>;
}
