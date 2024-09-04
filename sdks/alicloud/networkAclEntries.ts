// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkAclEntries extends pulumi.CustomResource {
    /**
     * Get an existing NetworkAclEntries resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkAclEntriesState, opts?: pulumi.CustomResourceOptions): NetworkAclEntries {
        return new NetworkAclEntries(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/networkAclEntries:NetworkAclEntries';

    /**
     * Returns true if the given object is an instance of NetworkAclEntries.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkAclEntries {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkAclEntries.__pulumiType;
    }

    public readonly egresses!: pulumi.Output<outputs.NetworkAclEntriesEgress[] | undefined>;
    public readonly ingresses!: pulumi.Output<outputs.NetworkAclEntriesIngress[] | undefined>;
    public readonly networkAclId!: pulumi.Output<string>;

    /**
     * Create a NetworkAclEntries resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkAclEntriesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkAclEntriesArgs | NetworkAclEntriesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkAclEntriesState | undefined;
            resourceInputs["egresses"] = state ? state.egresses : undefined;
            resourceInputs["ingresses"] = state ? state.ingresses : undefined;
            resourceInputs["networkAclId"] = state ? state.networkAclId : undefined;
        } else {
            const args = argsOrState as NetworkAclEntriesArgs | undefined;
            if ((!args || args.networkAclId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkAclId'");
            }
            resourceInputs["egresses"] = args ? args.egresses : undefined;
            resourceInputs["ingresses"] = args ? args.ingresses : undefined;
            resourceInputs["networkAclId"] = args ? args.networkAclId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkAclEntries.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkAclEntries resources.
 */
export interface NetworkAclEntriesState {
    egresses?: pulumi.Input<pulumi.Input<inputs.NetworkAclEntriesEgress>[]>;
    ingresses?: pulumi.Input<pulumi.Input<inputs.NetworkAclEntriesIngress>[]>;
    networkAclId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkAclEntries resource.
 */
export interface NetworkAclEntriesArgs {
    egresses?: pulumi.Input<pulumi.Input<inputs.NetworkAclEntriesEgress>[]>;
    ingresses?: pulumi.Input<pulumi.Input<inputs.NetworkAclEntriesIngress>[]>;
    networkAclId: pulumi.Input<string>;
}
