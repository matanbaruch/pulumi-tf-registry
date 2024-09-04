// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BgpSessions extends pulumi.CustomResource {
    /**
     * Get an existing BgpSessions resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BgpSessionsState, opts?: pulumi.CustomResourceOptions): BgpSessions {
        return new BgpSessions(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netactuate:index/bgpSessions:BgpSessions';

    /**
     * Returns true if the given object is an instance of BgpSessions.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BgpSessions {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BgpSessions.__pulumiType;
    }

    public readonly groupId!: pulumi.Output<number>;
    public readonly ipv6!: pulumi.Output<boolean | undefined>;
    public readonly mbpkgid!: pulumi.Output<number>;
    public readonly redundant!: pulumi.Output<boolean | undefined>;

    /**
     * Create a BgpSessions resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BgpSessionsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BgpSessionsArgs | BgpSessionsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BgpSessionsState | undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["ipv6"] = state ? state.ipv6 : undefined;
            resourceInputs["mbpkgid"] = state ? state.mbpkgid : undefined;
            resourceInputs["redundant"] = state ? state.redundant : undefined;
        } else {
            const args = argsOrState as BgpSessionsArgs | undefined;
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.mbpkgid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mbpkgid'");
            }
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["ipv6"] = args ? args.ipv6 : undefined;
            resourceInputs["mbpkgid"] = args ? args.mbpkgid : undefined;
            resourceInputs["redundant"] = args ? args.redundant : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BgpSessions.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BgpSessions resources.
 */
export interface BgpSessionsState {
    groupId?: pulumi.Input<number>;
    ipv6?: pulumi.Input<boolean>;
    mbpkgid?: pulumi.Input<number>;
    redundant?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a BgpSessions resource.
 */
export interface BgpSessionsArgs {
    groupId: pulumi.Input<number>;
    ipv6?: pulumi.Input<boolean>;
    mbpkgid: pulumi.Input<number>;
    redundant?: pulumi.Input<boolean>;
}
