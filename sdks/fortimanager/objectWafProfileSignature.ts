// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectWafProfileSignature extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWafProfileSignature resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWafProfileSignatureState, opts?: pulumi.CustomResourceOptions): ObjectWafProfileSignature {
        return new ObjectWafProfileSignature(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWafProfileSignature:ObjectWafProfileSignature';

    /**
     * Returns true if the given object is an instance of ObjectWafProfileSignature.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWafProfileSignature {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWafProfileSignature.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly creditCardDetectionThreshold!: pulumi.Output<number>;
    public readonly customSignatures!: pulumi.Output<outputs.ObjectWafProfileSignatureCustomSignature[] | undefined>;
    public readonly disabledSignature!: pulumi.Output<string | undefined>;
    public readonly disabledSubClass!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly mainClass!: pulumi.Output<outputs.ObjectWafProfileSignatureMainClass | undefined>;
    public readonly profile!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectWafProfileSignature resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectWafProfileSignatureArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWafProfileSignatureArgs | ObjectWafProfileSignatureState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWafProfileSignatureState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["creditCardDetectionThreshold"] = state ? state.creditCardDetectionThreshold : undefined;
            resourceInputs["customSignatures"] = state ? state.customSignatures : undefined;
            resourceInputs["disabledSignature"] = state ? state.disabledSignature : undefined;
            resourceInputs["disabledSubClass"] = state ? state.disabledSubClass : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["mainClass"] = state ? state.mainClass : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectWafProfileSignatureArgs | undefined;
            if ((!args || args.profile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profile'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["creditCardDetectionThreshold"] = args ? args.creditCardDetectionThreshold : undefined;
            resourceInputs["customSignatures"] = args ? args.customSignatures : undefined;
            resourceInputs["disabledSignature"] = args ? args.disabledSignature : undefined;
            resourceInputs["disabledSubClass"] = args ? args.disabledSubClass : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["mainClass"] = args ? args.mainClass : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectWafProfileSignature.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWafProfileSignature resources.
 */
export interface ObjectWafProfileSignatureState {
    adom?: pulumi.Input<string>;
    creditCardDetectionThreshold?: pulumi.Input<number>;
    customSignatures?: pulumi.Input<pulumi.Input<inputs.ObjectWafProfileSignatureCustomSignature>[]>;
    disabledSignature?: pulumi.Input<string>;
    disabledSubClass?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    mainClass?: pulumi.Input<inputs.ObjectWafProfileSignatureMainClass>;
    profile?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectWafProfileSignature resource.
 */
export interface ObjectWafProfileSignatureArgs {
    adom?: pulumi.Input<string>;
    creditCardDetectionThreshold?: pulumi.Input<number>;
    customSignatures?: pulumi.Input<pulumi.Input<inputs.ObjectWafProfileSignatureCustomSignature>[]>;
    disabledSignature?: pulumi.Input<string>;
    disabledSubClass?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    mainClass?: pulumi.Input<inputs.ObjectWafProfileSignatureMainClass>;
    profile: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}
