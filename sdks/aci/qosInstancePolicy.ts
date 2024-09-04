// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class QosInstancePolicy extends pulumi.CustomResource {
    /**
     * Get an existing QosInstancePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QosInstancePolicyState, opts?: pulumi.CustomResourceOptions): QosInstancePolicy {
        return new QosInstancePolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/qosInstancePolicy:QosInstancePolicy';

    /**
     * Returns true if the given object is an instance of QosInstancePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is QosInstancePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === QosInstancePolicy.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly ctrl!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly etrapAgeTimer!: pulumi.Output<string>;
    public readonly etrapBwThresh!: pulumi.Output<string>;
    public readonly etrapByteCt!: pulumi.Output<string>;
    public readonly etrapSt!: pulumi.Output<string>;
    public readonly fabricFlushInterval!: pulumi.Output<string>;
    public readonly fabricFlushSt!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly uburstSpineQueues!: pulumi.Output<string>;
    public readonly uburstTorQueues!: pulumi.Output<string>;

    /**
     * Create a QosInstancePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: QosInstancePolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: QosInstancePolicyArgs | QosInstancePolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as QosInstancePolicyState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["ctrl"] = state ? state.ctrl : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["etrapAgeTimer"] = state ? state.etrapAgeTimer : undefined;
            resourceInputs["etrapBwThresh"] = state ? state.etrapBwThresh : undefined;
            resourceInputs["etrapByteCt"] = state ? state.etrapByteCt : undefined;
            resourceInputs["etrapSt"] = state ? state.etrapSt : undefined;
            resourceInputs["fabricFlushInterval"] = state ? state.fabricFlushInterval : undefined;
            resourceInputs["fabricFlushSt"] = state ? state.fabricFlushSt : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["uburstSpineQueues"] = state ? state.uburstSpineQueues : undefined;
            resourceInputs["uburstTorQueues"] = state ? state.uburstTorQueues : undefined;
        } else {
            const args = argsOrState as QosInstancePolicyArgs | undefined;
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["ctrl"] = args ? args.ctrl : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["etrapAgeTimer"] = args ? args.etrapAgeTimer : undefined;
            resourceInputs["etrapBwThresh"] = args ? args.etrapBwThresh : undefined;
            resourceInputs["etrapByteCt"] = args ? args.etrapByteCt : undefined;
            resourceInputs["etrapSt"] = args ? args.etrapSt : undefined;
            resourceInputs["fabricFlushInterval"] = args ? args.fabricFlushInterval : undefined;
            resourceInputs["fabricFlushSt"] = args ? args.fabricFlushSt : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["uburstSpineQueues"] = args ? args.uburstSpineQueues : undefined;
            resourceInputs["uburstTorQueues"] = args ? args.uburstTorQueues : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(QosInstancePolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering QosInstancePolicy resources.
 */
export interface QosInstancePolicyState {
    annotation?: pulumi.Input<string>;
    ctrl?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    etrapAgeTimer?: pulumi.Input<string>;
    etrapBwThresh?: pulumi.Input<string>;
    etrapByteCt?: pulumi.Input<string>;
    etrapSt?: pulumi.Input<string>;
    fabricFlushInterval?: pulumi.Input<string>;
    fabricFlushSt?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    uburstSpineQueues?: pulumi.Input<string>;
    uburstTorQueues?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a QosInstancePolicy resource.
 */
export interface QosInstancePolicyArgs {
    annotation?: pulumi.Input<string>;
    ctrl?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    etrapAgeTimer?: pulumi.Input<string>;
    etrapBwThresh?: pulumi.Input<string>;
    etrapByteCt?: pulumi.Input<string>;
    etrapSt?: pulumi.Input<string>;
    fabricFlushInterval?: pulumi.Input<string>;
    fabricFlushSt?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    uburstSpineQueues?: pulumi.Input<string>;
    uburstTorQueues?: pulumi.Input<string>;
}
