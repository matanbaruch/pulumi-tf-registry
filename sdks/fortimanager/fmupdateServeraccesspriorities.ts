// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FmupdateServeraccesspriorities extends pulumi.CustomResource {
    /**
     * Get an existing FmupdateServeraccesspriorities resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FmupdateServeraccessprioritiesState, opts?: pulumi.CustomResourceOptions): FmupdateServeraccesspriorities {
        return new FmupdateServeraccesspriorities(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/fmupdateServeraccesspriorities:FmupdateServeraccesspriorities';

    /**
     * Returns true if the given object is an instance of FmupdateServeraccesspriorities.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FmupdateServeraccesspriorities {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FmupdateServeraccesspriorities.__pulumiType;
    }

    public readonly accessPublic!: pulumi.Output<string>;
    public readonly avIps!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly privateServers!: pulumi.Output<outputs.FmupdateServeraccessprioritiesPrivateServer[] | undefined>;
    public readonly webSpam!: pulumi.Output<string>;

    /**
     * Create a FmupdateServeraccesspriorities resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FmupdateServeraccessprioritiesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FmupdateServeraccessprioritiesArgs | FmupdateServeraccessprioritiesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FmupdateServeraccessprioritiesState | undefined;
            resourceInputs["accessPublic"] = state ? state.accessPublic : undefined;
            resourceInputs["avIps"] = state ? state.avIps : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["privateServers"] = state ? state.privateServers : undefined;
            resourceInputs["webSpam"] = state ? state.webSpam : undefined;
        } else {
            const args = argsOrState as FmupdateServeraccessprioritiesArgs | undefined;
            resourceInputs["accessPublic"] = args ? args.accessPublic : undefined;
            resourceInputs["avIps"] = args ? args.avIps : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["privateServers"] = args ? args.privateServers : undefined;
            resourceInputs["webSpam"] = args ? args.webSpam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FmupdateServeraccesspriorities.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FmupdateServeraccesspriorities resources.
 */
export interface FmupdateServeraccessprioritiesState {
    accessPublic?: pulumi.Input<string>;
    avIps?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    privateServers?: pulumi.Input<pulumi.Input<inputs.FmupdateServeraccessprioritiesPrivateServer>[]>;
    webSpam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FmupdateServeraccesspriorities resource.
 */
export interface FmupdateServeraccessprioritiesArgs {
    accessPublic?: pulumi.Input<string>;
    avIps?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    privateServers?: pulumi.Input<pulumi.Input<inputs.FmupdateServeraccessprioritiesPrivateServer>[]>;
    webSpam?: pulumi.Input<string>;
}
