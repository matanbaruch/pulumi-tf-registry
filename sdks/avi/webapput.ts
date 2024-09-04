// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Webapput extends pulumi.CustomResource {
    /**
     * Get an existing Webapput resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebapputState, opts?: pulumi.CustomResourceOptions): Webapput {
        return new Webapput(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'avi:index/webapput:Webapput';

    /**
     * Returns true if the given object is an instance of Webapput.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Webapput {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Webapput.__pulumiType;
    }

    public readonly configpbAttributes!: pulumi.Output<outputs.WebapputConfigpbAttribute[] | undefined>;
    public readonly defaultFirstInt!: pulumi.Output<string | undefined>;
    public readonly defaultSecondInt!: pulumi.Output<string | undefined>;
    public readonly defaultString!: pulumi.Output<string | undefined>;
    public readonly defaultThirdInt!: pulumi.Output<string | undefined>;
    public readonly mandatoryTest!: pulumi.Output<outputs.WebapputMandatoryTest[] | undefined>;
    public readonly mandatoryTests!: pulumi.Output<outputs.WebapputMandatoryTest[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly sensitiveTest!: pulumi.Output<outputs.WebapputSensitiveTest[] | undefined>;
    public readonly sensitiveTests!: pulumi.Output<outputs.WebapputSensitiveTest[] | undefined>;
    public readonly skipOptionalCheckTests!: pulumi.Output<string>;
    public readonly stringLengthTest!: pulumi.Output<outputs.WebapputStringLengthTest[] | undefined>;
    public readonly stringLengthTests!: pulumi.Output<outputs.WebapputStringLengthTest[] | undefined>;
    public readonly tenantRef!: pulumi.Output<string>;
    public readonly testSensitiveString!: pulumi.Output<string>;
    public readonly testString!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Webapput resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WebapputArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebapputArgs | WebapputState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebapputState | undefined;
            resourceInputs["configpbAttributes"] = state ? state.configpbAttributes : undefined;
            resourceInputs["defaultFirstInt"] = state ? state.defaultFirstInt : undefined;
            resourceInputs["defaultSecondInt"] = state ? state.defaultSecondInt : undefined;
            resourceInputs["defaultString"] = state ? state.defaultString : undefined;
            resourceInputs["defaultThirdInt"] = state ? state.defaultThirdInt : undefined;
            resourceInputs["mandatoryTest"] = state ? state.mandatoryTest : undefined;
            resourceInputs["mandatoryTests"] = state ? state.mandatoryTests : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sensitiveTest"] = state ? state.sensitiveTest : undefined;
            resourceInputs["sensitiveTests"] = state ? state.sensitiveTests : undefined;
            resourceInputs["skipOptionalCheckTests"] = state ? state.skipOptionalCheckTests : undefined;
            resourceInputs["stringLengthTest"] = state ? state.stringLengthTest : undefined;
            resourceInputs["stringLengthTests"] = state ? state.stringLengthTests : undefined;
            resourceInputs["tenantRef"] = state ? state.tenantRef : undefined;
            resourceInputs["testSensitiveString"] = state ? state.testSensitiveString : undefined;
            resourceInputs["testString"] = state ? state.testString : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as WebapputArgs | undefined;
            resourceInputs["configpbAttributes"] = args ? args.configpbAttributes : undefined;
            resourceInputs["defaultFirstInt"] = args ? args.defaultFirstInt : undefined;
            resourceInputs["defaultSecondInt"] = args ? args.defaultSecondInt : undefined;
            resourceInputs["defaultString"] = args ? args.defaultString : undefined;
            resourceInputs["defaultThirdInt"] = args ? args.defaultThirdInt : undefined;
            resourceInputs["mandatoryTest"] = args ? args.mandatoryTest : undefined;
            resourceInputs["mandatoryTests"] = args ? args.mandatoryTests : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sensitiveTest"] = args ? args.sensitiveTest : undefined;
            resourceInputs["sensitiveTests"] = args ? args.sensitiveTests : undefined;
            resourceInputs["skipOptionalCheckTests"] = args ? args.skipOptionalCheckTests : undefined;
            resourceInputs["stringLengthTest"] = args ? args.stringLengthTest : undefined;
            resourceInputs["stringLengthTests"] = args ? args.stringLengthTests : undefined;
            resourceInputs["tenantRef"] = args ? args.tenantRef : undefined;
            resourceInputs["testSensitiveString"] = args?.testSensitiveString ? pulumi.secret(args.testSensitiveString) : undefined;
            resourceInputs["testString"] = args ? args.testString : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["testSensitiveString"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Webapput.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Webapput resources.
 */
export interface WebapputState {
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.WebapputConfigpbAttribute>[]>;
    defaultFirstInt?: pulumi.Input<string>;
    defaultSecondInt?: pulumi.Input<string>;
    defaultString?: pulumi.Input<string>;
    defaultThirdInt?: pulumi.Input<string>;
    mandatoryTest?: pulumi.Input<pulumi.Input<inputs.WebapputMandatoryTest>[]>;
    mandatoryTests?: pulumi.Input<pulumi.Input<inputs.WebapputMandatoryTest>[]>;
    name?: pulumi.Input<string>;
    sensitiveTest?: pulumi.Input<pulumi.Input<inputs.WebapputSensitiveTest>[]>;
    sensitiveTests?: pulumi.Input<pulumi.Input<inputs.WebapputSensitiveTest>[]>;
    skipOptionalCheckTests?: pulumi.Input<string>;
    stringLengthTest?: pulumi.Input<pulumi.Input<inputs.WebapputStringLengthTest>[]>;
    stringLengthTests?: pulumi.Input<pulumi.Input<inputs.WebapputStringLengthTest>[]>;
    tenantRef?: pulumi.Input<string>;
    testSensitiveString?: pulumi.Input<string>;
    testString?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Webapput resource.
 */
export interface WebapputArgs {
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.WebapputConfigpbAttribute>[]>;
    defaultFirstInt?: pulumi.Input<string>;
    defaultSecondInt?: pulumi.Input<string>;
    defaultString?: pulumi.Input<string>;
    defaultThirdInt?: pulumi.Input<string>;
    mandatoryTest?: pulumi.Input<pulumi.Input<inputs.WebapputMandatoryTest>[]>;
    mandatoryTests?: pulumi.Input<pulumi.Input<inputs.WebapputMandatoryTest>[]>;
    name?: pulumi.Input<string>;
    sensitiveTest?: pulumi.Input<pulumi.Input<inputs.WebapputSensitiveTest>[]>;
    sensitiveTests?: pulumi.Input<pulumi.Input<inputs.WebapputSensitiveTest>[]>;
    skipOptionalCheckTests?: pulumi.Input<string>;
    stringLengthTest?: pulumi.Input<pulumi.Input<inputs.WebapputStringLengthTest>[]>;
    stringLengthTests?: pulumi.Input<pulumi.Input<inputs.WebapputStringLengthTest>[]>;
    tenantRef?: pulumi.Input<string>;
    testSensitiveString?: pulumi.Input<string>;
    testString?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
