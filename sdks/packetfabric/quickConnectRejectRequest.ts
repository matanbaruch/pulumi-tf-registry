// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class QuickConnectRejectRequest extends pulumi.CustomResource {
    /**
     * Get an existing QuickConnectRejectRequest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QuickConnectRejectRequestState, opts?: pulumi.CustomResourceOptions): QuickConnectRejectRequest {
        return new QuickConnectRejectRequest(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'packetfabric:index/quickConnectRejectRequest:QuickConnectRejectRequest';

    /**
     * Returns true if the given object is an instance of QuickConnectRejectRequest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is QuickConnectRejectRequest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === QuickConnectRejectRequest.__pulumiType;
    }

    /**
     * Circuit ID of the Quick Connect import.
     */
    public readonly importCircuitId!: pulumi.Output<string>;
    /**
     * The reason that you are rejecting the request.
     */
    public readonly rejectionReason!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.QuickConnectRejectRequestTimeouts | undefined>;

    /**
     * Create a QuickConnectRejectRequest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QuickConnectRejectRequestArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: QuickConnectRejectRequestArgs | QuickConnectRejectRequestState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as QuickConnectRejectRequestState | undefined;
            resourceInputs["importCircuitId"] = state ? state.importCircuitId : undefined;
            resourceInputs["rejectionReason"] = state ? state.rejectionReason : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as QuickConnectRejectRequestArgs | undefined;
            if ((!args || args.importCircuitId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'importCircuitId'");
            }
            resourceInputs["importCircuitId"] = args ? args.importCircuitId : undefined;
            resourceInputs["rejectionReason"] = args ? args.rejectionReason : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(QuickConnectRejectRequest.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering QuickConnectRejectRequest resources.
 */
export interface QuickConnectRejectRequestState {
    /**
     * Circuit ID of the Quick Connect import.
     */
    importCircuitId?: pulumi.Input<string>;
    /**
     * The reason that you are rejecting the request.
     */
    rejectionReason?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.QuickConnectRejectRequestTimeouts>;
}

/**
 * The set of arguments for constructing a QuickConnectRejectRequest resource.
 */
export interface QuickConnectRejectRequestArgs {
    /**
     * Circuit ID of the Quick Connect import.
     */
    importCircuitId: pulumi.Input<string>;
    /**
     * The reason that you are rejecting the request.
     */
    rejectionReason?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.QuickConnectRejectRequestTimeouts>;
}
